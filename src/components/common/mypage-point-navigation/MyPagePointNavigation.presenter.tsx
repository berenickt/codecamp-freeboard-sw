import React from 'react'

import * as S from './MyPagePointNavigation.styles'
import { useMoveToPage } from '../hooks/useMoveToPage'

export default function MyPagePointNavigation() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.MenuBox>
      <S.myPageNavMenu onClick={onClickMoveToPage('/my/point')}>전체내역 |</S.myPageNavMenu>
      <S.myPageNavMenu onClick={onClickMoveToPage('/my/point/charge-history')}>충전내역 |</S.myPageNavMenu>
      <S.myPageNavMenu onClick={onClickMoveToPage('/my/point/buy-history')}>구매내역 |</S.myPageNavMenu>
      <S.myPageNavMenu onClick={onClickMoveToPage('/my/point/sell-history')}>판매내역</S.myPageNavMenu>
    </S.MenuBox>
  )
}
