import * as S from './login.style'
import { ILoginPresenter } from './login.types'
import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'

export default function LoginUI(props: ILoginPresenter) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.LoginSection>
      <S.Wrapper>
        <S.LoginTitle>
          로그인
          <S.LoginSubTitle>Login</S.LoginSubTitle>
        </S.LoginTitle>

        <S.BasicInput onChange={props.onChangeEmail} type="text" placeholder="이메일을 입력해주세요." />
        <S.ErrorMessage>{props.emailError}</S.ErrorMessage>
        <S.BasicInput onChange={props.onChangePassword} type="password" placeholder="비밀번호를 입력해주세요." />
        <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
        <S.LoginCheck>
          <S.LoginCheckInput type="radio" />
          <S.LoginCheckText>로그인 상태 유지</S.LoginCheckText>
        </S.LoginCheck>
        <S.LoginBtn onClick={props.onClickLogIn}>로그인</S.LoginBtn>
        <S.SignupWrapper>
          아직 계정이 없으신가요?
          <S.SignupPageMoveSpan onClick={onClickMoveToPage(`/signup`)}>회원가입</S.SignupPageMoveSpan>
        </S.SignupWrapper>
      </S.Wrapper>
    </S.LoginSection>
  )
}
