import { useMoveToPage } from '../hooks/useMoveToPage'
import * as S from './MyPageSiderbar.styles'

export default function MyPageSiderbarUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.SideLoginInfo>
      <S.Title>MYPAGE</S.Title>
      <S.Avatar src="/images/avatar.png" />
      <S.UserName>{props.loginData?.fetchUserLoggedIn?.name}님</S.UserName>
      <S.UserPoint>
        <S.PointIcon />
        {props.loginData?.fetchUserLoggedIn?.userPoint?.amount} P
      </S.UserPoint>
      <S.UserMenuWrapper>
        <S.UserMenu onClick={onClickMoveToPage('/my/products')}>
          <S.CartIcon />
          장터
        </S.UserMenu>
        <S.UserMenu onClick={onClickMoveToPage('/my/point')}>
          <S.PointIcon />
          포인트
        </S.UserMenu>
        <S.UserMenu onClick={onClickMoveToPage('/my/profile')}>
          <S.EditPasswordIcon />
          프로필
        </S.UserMenu>
      </S.UserMenuWrapper>
    </S.SideLoginInfo>
  )
}
