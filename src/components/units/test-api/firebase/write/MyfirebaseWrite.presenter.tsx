import * as S from './MyfirebaseWrite.styles'
import { IMyfirebaseWriteUIProps } from './MyfirebaseWrite.types'

export default function MyfirebaseWriteUI(props: IMyfirebaseWriteUIProps) {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Label>작성자</S.Label>
        <S.Writer type="text" onChange={props.onChangeWriter} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>제 목</S.Label>
        <S.Writer type="text" onChange={props.onChangeTitle} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내 용</S.Label>
        <S.Writer type="text" onChange={props.onChangeContents} />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.RegisterBtn onClick={props.onClickMoveToList}>목록으로</S.RegisterBtn>
        <S.RegisterBtn onClick={props.onClickSubmit}>등록하기</S.RegisterBtn>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}
