import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from './BoardDetail.queries'

import { MouseEvent } from 'react'
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '@/common/types/generated/types'

export default function BoardDetail() {
  const router = useRouter()

  // **** Playground에 등록
  const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD)
  const [dislikeBoard] = useMutation<Pick<IMutation, 'dislikeBoard'>, IMutationDislikeBoardArgs>(DISLIKE_BOARD)
  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(DELETE_BOARD)

  // **** 게시판 조회
  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  })

  // **** 게시판 삭제
  const onClickDeleteBtn = async (event: MouseEvent<HTMLButtonElement>) => {
    await deleteBoard({
      variables: { boardId: event.currentTarget.id },
      // **** refetchQueries : 삭제 후 바로 화면에 반영하기 위해 다시 최근 10개를 fetch 요청
      // refetchQueries: [{ query: FETCH_BOARD }],
    })
    alert('삭제가 완료되었습니다.')
    void router.push(`/boards`)
  }

  // **** 좋아요 버튼
  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: String(router.query.id) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.id) },
        },
      ],
    })
  }

  // **** 싫어요 버튼
  const onClickDislike = async () => {
    await dislikeBoard({
      variables: { boardId: String(router.query.id) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.id) },
        },
      ],
    })
  }

  return (
    <BoardDetailUI
      data={data}
      onClickDeleteBtn={onClickDeleteBtn}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  )
}
