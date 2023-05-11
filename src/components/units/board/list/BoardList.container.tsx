import { useRouter } from 'next/router'
import { MouseEvent, useState } from 'react'
import { useQuery } from '@apollo/client'

import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '@/common/types/generated/types'

export default function BoardList() {
  const router = useRouter()

  // **** 상태
  const [keyword, setKeyword] = useState('')

  // **** PlayGround 요청
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)

  const onClickMoveToBoardNew = () => router.push('/boards/new')
  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) =>
    router.push(`/boards/${event.currentTarget.id}`)
  const onChangeKeyword = (value: string) => setKeyword(value)

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  )
}
