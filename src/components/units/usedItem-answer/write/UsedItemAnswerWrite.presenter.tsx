import * as S from './UsedItemAnswerWrite.styles'
import { IUseritemAnswerWriteUIProps } from './UsedItemAnswerWrite.types'

export default function NestedCommentWriteUI(props: IUseritemAnswerWriteUIProps) {
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <S.CommentTextArea
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시
                모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          defaultValue={props.replyEl?.contents}
        />
        <S.ButtonWrapper>
          <div>
            <span>{props.contents?.length}</span> / 100
          </div>
          <S.CommentBtn onClick={props.isReply ? props.onClickCreateAnswer : props.onClickUpdateAnswer}>
            {props.isReply ? '답글달기' : '수정하기'}
          </S.CommentBtn>
        </S.ButtonWrapper>
      </S.CommentWrapper>
    </S.Wrapper>
  )
}
