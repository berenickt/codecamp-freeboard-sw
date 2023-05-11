import React from 'react'

import * as S from './MyPageUseditemNavigation.styles'
import { useMoveToPage } from '../hooks/useMoveToPage'

export default function MyPageUseditemNavigation() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.MenuBox>
      <S.myPageNavMenu onClick={onClickMoveToPage('/my/products')}>내 상품 |</S.myPageNavMenu>
      <S.myPageNavMenu onClick={onClickMoveToPage('/my/products/purchaed')}>구매한 상품 |</S.myPageNavMenu>
      <S.myPageNavMenu onClick={onClickMoveToPage('/my/products/bookmark')}>찜목록</S.myPageNavMenu>
    </S.MenuBox>
  )
}
