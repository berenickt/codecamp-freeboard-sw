import BoardCommentListUIItem from './BoardCommentList.presenterItem'
import { IBoardCommentListUIProps } from './BoardCommentList.types'
import InfiniteScroll from 'react-infinite-scroller'

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  // 데이터가 없으면 빈 div
  if (!props.data) return <div />

  return (
    // hasMore 더 갖고오는 여부
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map(element => (
        <BoardCommentListUIItem key={element._id} element={element} />
      ))}
    </InfiniteScroll>
  )
}
