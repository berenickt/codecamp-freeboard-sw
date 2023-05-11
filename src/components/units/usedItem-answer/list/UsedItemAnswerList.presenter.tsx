import * as S from './UsedItemAnswerList.styles'
import NestedCommentListItem from './UsedItemAnswerList.presenteritem'
import { IUsedItemAnswerListProps } from './UsedItemAnswerList.types'

export default function UsedItemAnswerListUI(props: IUsedItemAnswerListProps) {
  return (
    <S.Wrapper>
      {props.data?.fetchUseditemQuestionAnswers.map((replyElement: any) => (
        <NestedCommentListItem key={replyElement._id} replyElement={replyElement} element={props.element} />
      ))}
    </S.Wrapper>
  )
}
