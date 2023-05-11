import { Modal } from 'antd'
import { useState } from 'react'
import {
  CaretDownOutlined,
  DollarOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'

import * as S from './LayoutHeader.styles'
import { ILayoutHeaderProps } from './LayoutHeader.types'
import { useMoveToPage } from '../../hooks/useMoveToPage'

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const { onClickMoveToPage } = useMoveToPage()

  // **** 상태
  const [myPage, setMyPage] = useState(false)

  const onClickMyPage = () => setMyPage(prev => !prev)

  return (
    <>
      {/* 모달창 */}
      {props.isOpen && (
        <Modal visible={true} centered width={464} onCancel={props.onClickShowModal} footer={null}>
          <S.ModalWrapper>
            <S.ModalTitle>충전할 금액을 선택해주세요!</S.ModalTitle>
            <S.PointPickSelectBtn onClick={props.showPoint}>
              {props.amount ?? '포인트 선택'}
              <CaretDownOutlined />
            </S.PointPickSelectBtn>
            {props.isShowPoint && (
              <S.PointWrapperUl>
                <S.PointLi value="100" onClick={props.onClickPoint}>
                  100
                </S.PointLi>
                <S.PointLi value="500" onClick={props.onClickPoint}>
                  500
                </S.PointLi>
                <S.PointLi value="2000" onClick={props.onClickPoint}>
                  2,000
                </S.PointLi>
                <S.PointLi value="5000" onClick={props.onClickPoint}>
                  5,000
                </S.PointLi>
              </S.PointWrapperUl>
            )}
            <S.ChargeBtn isActive={props.isActive} onClick={props.onClickPayment}>
              충전하기
            </S.ChargeBtn>
          </S.ModalWrapper>
        </Modal>
      )}
      <S.Header>
        <S.Container>
          <S.Logo onClick={onClickMoveToPage('/')}>
            <S.LogoImg src="/favicon.ico" />
            <S.Logotext>중고마켓</S.Logotext>
          </S.Logo>
          <S.LoginMenu>
            {props.loginData ? (
              <>
                <S.Profile onClick={onClickMyPage}>
                  <S.Avatar src="/images/avatar.png" alt="유저아이콘" />
                  <S.InnerButton>{props.loginData?.fetchUserLoggedIn.name} 님</S.InnerButton>
                  <CaretDownOutlined />
                </S.Profile>
                <S.CartWrapper onClick={onClickMoveToPage(`/my/basket`)}>
                  <ShoppingCartOutlined />
                </S.CartWrapper>

                <S.DragDownMenu>
                  {myPage && (
                    <S.DropDownMenuTrueWrapper>
                      <div>
                        <S.Avatar src="/images/avatar.png" alt="유저아이콘" />
                        <S.DropDownMenuProfileWrapper>
                          <p> {props.loginData?.fetchUserLoggedIn.name} 님</p>
                          <p>{props.loginData?.fetchUserLoggedIn?.userPoint?.amount ?? 0} P</p>
                        </S.DropDownMenuProfileWrapper>
                      </div>
                      <S.DropDownInnerMenu>
                        <li onClick={props.onClickShowModal}>
                          <DollarOutlined /> 충전하기
                        </li>
                        <li onClick={onClickMoveToPage(`/my/products`)}>
                          <UserOutlined /> 마이페이지
                        </li>
                        <li onClick={props.onClickLogout}>
                          <LogoutOutlined /> 로그아웃
                        </li>
                      </S.DropDownInnerMenu>
                    </S.DropDownMenuTrueWrapper>
                  )}
                </S.DragDownMenu>
              </>
            ) : (
              <>
                <S.InnerButton onClick={onClickMoveToPage(`/login`)}>로그인</S.InnerButton>
                <S.InnerButton onClick={onClickMoveToPage(`/signup`)}>회원가입</S.InnerButton>
              </>
            )}
          </S.LoginMenu>
        </S.Container>
      </S.Header>
    </>
  )
}
