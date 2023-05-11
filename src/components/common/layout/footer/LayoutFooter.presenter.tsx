import * as S from './LayoutFooter.styles'

export default function LayoutFooterUI() {
  return (
    <S.Footer>
      <S.Container>
        <S.Title>FOOTER</S.Title>
        <S.IconWrapper>
          <S.FacebookLogo />
          <S.InstagramLogo />
          <S.YotubeLogo />
        </S.IconWrapper>
        <S.BottomNotice>@2023 YooSeungWoo notice board</S.BottomNotice>
      </S.Container>
    </S.Footer>
  )
}
