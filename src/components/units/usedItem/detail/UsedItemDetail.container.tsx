import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import UsedItemDetailUI from './UsedItemDetail.presenter'
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEM2,
  TOGGLE_USED_ITEM_PICK,
} from './UsedItemDetail.queries'
import { basketUsedItems } from '@/common/store'
import { IQuery, IQueryFetchUseditemArgs } from '@/common/types/generated/types'

export default function UsedItemDetail() {
  const router = useRouter()
  const useditemId = String(router.query.useditemId)

  // **** 상태
  const [, setBasketItems] = useRecoilState(basketUsedItems)

  // **** PlayGround
  const { data } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
    variables: { useditemId },
  })
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM)
  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK)

  // **** 상품 포인트 결제
  const onClickPay = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: useditemId,
        },
      })
      console.log(result)
      Modal.success({ content: '상품구매에 성공하였습니다!' })
      void router.push('/')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 상품 찜등록
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId,
        },
        // **** 옵티미스틱 UI -> 캐시를 바꾸고 캐시값을 받아오는걸 기다리지 않고 바로 바꿔줌
        optimisticResponse: {
          pickedCount: (data?.fetchUseditem.pickedCount ?? 0) + 1,
        },
        // **** apollo 캐시를 직접 수정을 할 수 있었습니다.(백엔드 캐시가 아닙니다.) -> 느리지만 효율적
        // ** (백엔드에 요청은 안하지만, 받아올때까지 기다려줘야 함)
        update(cache, { data }) {
          // 이전 시간에는 modify를 사용했지만, 오늘은 writeQuery를 사용해보겠습니다.
          cache.writeQuery({
            query: FETCH_USED_ITEM2,
            variables: { useditemId },
            // 어떻게 수정할 것인지는 아래에 적어줍니다.
            data: {
              // 기존값과 똑같이 받아오셔야 합니다.
              fetchUseditem: {
                _id: data?._id,
                __typename: data?.__typename,
                pickedCount: data?.pickedCount,
              },
            },
          })
        },
      })
      // Modal.success({ content: '상품찜 성공했습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: '로그인을 먼저해주세요.' })
    }
  }

  // **** 상품 삭제
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId,
        },
      })
      Modal.success({ content: '상품이 삭제되었습니다.' })
      void router.push('/')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
      // Modal.success({ content: '다른 회원의 상품은 삭제할 수 없습니다.' })
    }
  }

  // **** 상품 장바구니에 담기
  const onClickBasket = () => {
    // 1. 기존 장바구니 가져오기, 문자열을 JSON으로 바꿔서 저장, 없다면 빈 배열
    const baskets = JSON.parse(localStorage.getItem('baskets') ?? '[]')

    // 2. 이미 담겼는지 확인하기
    baskets.filter((basketEl: any) => basketEl[0] === useditemId)

    if (baskets.includes(useditemId)) {
      Modal.error({ content: '이미 담으신 물품입니다' })
      return
    }

    // 3. 해당 장바구니에 담기, JSON을 문자열로 바꿔서 저장
    baskets.push(useditemId)
    localStorage.setItem('baskets', JSON.stringify(baskets))
    Modal.success({ content: '장바구니에 담겼습니다.' })
    setBasketItems(baskets)
  }

  return (
    <UsedItemDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickPay={onClickPay}
      onClickPick={onClickPick}
      onClickBasket={onClickBasket}
    />
  )
}
