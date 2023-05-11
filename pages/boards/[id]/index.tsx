import BoardCommentList from '@/components/units/board-comment/list/BoardCommentList.container'
import BoardCommentWrite from '@/components/units/board-comment/write/BoardCommentWrite.container'
import BoardDetail from '@/components/units/board/detail/BoardDetail.container'

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  )
}
