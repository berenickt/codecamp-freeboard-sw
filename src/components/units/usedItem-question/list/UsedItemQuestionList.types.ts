import { IQuery, IUseditemQuestion } from '@/common/types/generated/types'

export interface IUsedItemQuestionListUIProps {
  data?: Pick<IQuery, 'fetchUseditemQuestions'>
  onLoadMore?: () => void
}

export interface IUsedItemQuestionListUIItemProps {
  element: IUseditemQuestion
}
