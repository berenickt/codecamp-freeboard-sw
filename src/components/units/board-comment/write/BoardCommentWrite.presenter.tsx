import * as S from './BoardCommentWrite.styles'
import { IBoardCommentWriteUIProps } from './BoardCommentWrite.types'

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      {/* 5. 수정 여부가 false면, 댓글 등록 창의 헤더 부분 보여주기 */}
      {!props.isEdit && (
        <S.TitleWrapper>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <S.Title>댓글</S.Title>
        </S.TitleWrapper>
      )}
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          // 만약에 props.writer가 비어있다면, 뒤에꺼 보여주기
          value={props.writer || (props.element?.writer ?? '')}
          readOnly={!!props.element?.writer}
        />
        <S.Input type="password" placeholder="비밀번호" onChange={props.onChangePassword} value={props.password} />
        <S.Star onChange={props.setStar} />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          // 만약에 props.contents가 비어있다면, 뒤에꺼 보여주기
          value={props.contents || (props.element?.contents ?? '')}
        />
        <S.BottomWrapper>
          <S.ContentsLength>
            {(props.contents ? props.contents.length : props.element?.contents.length) ?? 0}/100
          </S.ContentsLength>
          <S.Button onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}>
            {props.isEdit ? '수정하기' : '등록하기'}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  )
}
