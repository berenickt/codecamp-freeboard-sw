import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import { IQuery, IQueryFetchBoardCommentsArgs } from '@/common/types/generated/types'

export default function BoardCommentList() {
  const router = useRouter()

  // **** PlayGorund
  const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: { boardId: String(router.query.id) },
    },
  )

  // console.log('=====fetch 댓글요청 ===');
  // console.log(data);

  // **** 댓글리스트 무한스크롤
  const onLoadMore = () => {
    // 데이터가 없다면, 종료
    if (!data) return

    // ** 추가 페이지 요청
    void fetchMore({
      // ** 마지막 페이지, (e.g. 게시글이 86개면 9페이지), ceil(오름차순), 8.6 -> 9
      // 다음 페이지 요청 |  오름(게시글수 / 10) + 1 | 3페이지 30개가 있으면 3페이지, 다음 페이지를 요청하려면 여기다 + 1해서 4페이지 요청
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      // 30개 페이지, 추가 10개(31~40페이지)
      updateQuery: (prev, { fetchMoreResult }) => {
        // 받아온 데이터가 없다면, 기존 30 페이지 그대로 다시 배열(원상복귀)
        if (!fetchMoreResult?.fetchBoardComments) return { fetchBoardComments: [...prev.fetchBoardComments] }
        return {
          // 전체 댓글 : [...이전 댓글, ...추가댓글]
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        }
      },
    })
  }

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />
}
