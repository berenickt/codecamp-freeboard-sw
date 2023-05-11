import MyPageSideBar from '@/components/common/myPageSidebar/MyPageSiderbar.container'
import * as S from './MyProfile.styles'

export default function MyProfileUI(props: any) {
  return (
    <S.FlexWrapper>
      <MyPageSideBar />
      <S.Section>
        <S.Title>비밀번호 변경</S.Title>
        <S.FlexBox>
          <div>현재 비밀번호</div>
          <S.Input
            type={props.showPresentPassword ? 'text' : 'password'}
            placeholder="현재 비밀번호를 입력해 주세요."
          />
        </S.FlexBox>
        {props.showPresentPassword ? (
          <S.ClickBt onClick={props.onClickShowPresentPassword}></S.ClickBt>
        ) : (
          <S.ClickBt onClick={props.onClickShowPresentPassword}></S.ClickBt>
        )}

        <S.FlexBox>
          <div>새 비밀번호</div>
          <S.Input
            type={props.showNewPassword ? 'text' : 'password'}
            placeholder="새 비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
        </S.FlexBox>
        {props.showNewPassword ? (
          <S.ClickBt onClick={props.onClickShowNewPassword}></S.ClickBt>
        ) : (
          <S.ClickBt onClick={props.onClickShowNewPassword}></S.ClickBt>
        )}
        <S.FlexBox>
          <div>새 비밀번호 확인</div>
          <S.Input
            type={props.showCheckPassword ? 'text' : 'password'}
            placeholder="새 비밀번호를 확인해주세요."
            onChange={props.onChangePasswordCheck}
          />
        </S.FlexBox>
        {props.showCheckPassword ? (
          <S.ClickBt onClick={props.onClickShowCheckPassword}></S.ClickBt>
        ) : (
          <S.ClickBt onClick={props.onClickShowCheckPassword}></S.ClickBt>
        )}
        {props.password !== props.passwordCheck ? (
          <S.Error color="red">비밀번호가 일치하지 않습니다.</S.Error>
        ) : (
          <S.Error color="#056d20df">비밀번호가 일치합니다.</S.Error>
        )}
        <S.BottomRightWrapper>
          <S.Button onClick={props.onClickResetPassword}>비밀번호 변경</S.Button>
        </S.BottomRightWrapper>
      </S.Section>
    </S.FlexWrapper>
  )
}
