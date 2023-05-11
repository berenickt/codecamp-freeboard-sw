import { Modal } from 'antd'
import Head from 'next/head'
import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import LayoutHeaderUI from './LayoutHeader.presenter'
import { ErrorModal, SuccessModal } from '../../modal'
import { IMutation, IQuery } from '@/common/types/generated/types'
import { CREATE_POINT_LOADING, FETCH_USER_LOGGED_IN, LOGOUT_USER } from './LayoutHeader.queries'

// 원래 있던 globalThis에 IMP 추가
declare const window: typeof globalThis & {
  IMP: any
}

export default function LayoutHeader() {
  const router = useRouter()

  // **** 상태
  const [isOpen, setIsOpen] = useState(false) // 모달
  const [isLoginDropdown, setIsLoginDropdown] = useState(false) // 로그인 후 드롭다운 여부
  const [isShowPoint, setIsShowPoint] = useState(false) // 충전포인트 커스텀
  const [amount, setAmount] = useState<number>(0) // 충전포인트 선택
  const [isActive, setIsActive] = useState(false) // 충전 버튼 색깔

  const showPoint = () => setIsShowPoint(prev => !prev)
  const onClickMyPage = () => setIsLoginDropdown(prev => !prev)
  const onClickShowModal = () => setIsOpen(prev => !prev)

  const onClickPoint = (event: any) => {
    setAmount(event.currentTarget.value)
    setIsShowPoint(prev => !prev)
    setIsActive(prev => !prev)
  }

  // **** PlayGround
  const { data: loginData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const [logout] = useMutation<Pick<IMutation, 'logoutUser'>>(LOGOUT_USER)
  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_LOADING)

  // **** 로그아웃
  const onClickLogout = async () => {
    try {
      await logout()
      location.reload()
      // ======================================
      // localStorage.removeItem('refreshToken')
      // setAccessToken('')
      // ======================================
      SuccessModal('로그아웃되었습니다.')
      void router.push('/login')
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message)
    }
  }

  // **** 결제 요청
  const onClickPayment = () => {
    onClickShowModal()
    const IMP = window.IMP // 생략가능
    IMP.init('imp49910675') // 아임포트 홈페이지의 IMP.init("가맹점 식별코드"). 내꺼 imp27275199, 코드캠프꺼 imp49910675

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: 'kakaopay', // 'kcp.{상점ID}'
        pay_method: 'card', // 무통장입금하고 싶으면 vbank
        // merchant_uid: "ORD20180131-0000011", // 상품 ID, 중복될 시, 결제 안됨, 주석 해놓으면 랜덤으로 생성됨
        name: `포인트 : ${amount}`, // 상품이름
        amount, // 가격
        buyer_email: loginData?.fetchUserLoggedIn.email,
        buyer_name: loginData?.fetchUserLoggedIn.name,
        // buyer_tel: '010-4242-4242',
        // buyer_addr: '서울특별시 강남구 신사동',
        // buyer_postcode: '01181',
        m_redirect_url: 'http://localhost:3000/my/products', // 모바일에서는 결제 시, 페이지 주소가 바뀜. 따라서, 결제 끝나고 돌아갈 주소 입력해야 함
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log('=========결제 성공 데이터=========')
          console.log(rsp)

          // ** 백엔드에 결제관련 데이터 넘겨주기 => 즉, mutation 실행하기 (e.g. GraphQL PlayGround의 createPointTransactionOfLoading)
          void createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
            // variables: { impUid: 'imp27275199' },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          })
        } else Modal.error({ content: '결제를 실패했습니다! 다시 시도해주세요.' })
      },
    )
  }

  return (
    <>
      <Head>
        {/* https://portone.gitbook.io/docs/auth/guide/1. */}
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <LayoutHeaderUI
        loginData={loginData}
        onClickLogout={onClickLogout}
        onClickPayment={onClickPayment}
        showPoint={showPoint}
        onClickMyPage={onClickMyPage}
        onClickShowModal={onClickShowModal}
        onClickPoint={onClickPoint}
        isLoginDropdown={isLoginDropdown}
        isOpen={isOpen}
        isShowPoint={isShowPoint}
        isActive={isActive}
        amount={amount}
      />
    </>
  )
}
