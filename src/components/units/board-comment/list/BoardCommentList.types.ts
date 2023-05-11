import { IBoardComment, IQuery } from '@/common/types/generated/types'

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, 'fetchBoardComments'>
  onLoadMore: () => void
}

export interface IBoardCommentListUIItemProps {
  element: IBoardComment
}
