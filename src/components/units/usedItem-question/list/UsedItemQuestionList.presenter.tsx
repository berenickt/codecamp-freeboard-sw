import * as S from './UsedItemQuestionList.styles'
import UsedItemQuestionListUIItem from './UsedItemQuestionList.presenterItem'
import { IUsedItemQuestionListUIProps } from './UsedItemQuestionList.types'

export default function UsedItemQuestionListUI(props: IUsedItemQuestionListUIProps) {
  if (!props.data) return <div />

  return (
    <S.CommentListWrapper>
      {props.data?.fetchUseditemQuestions.map(element => (
        <UsedItemQuestionListUIItem key={element._id} element={element} />
      ))}
    </S.CommentListWrapper>
  )
}
