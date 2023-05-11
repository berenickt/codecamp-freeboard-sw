import { useQuery } from '@apollo/client'

import { IQuery, IQueryFetchBoardArgs } from '@/common/types/generated/types'
import { FETCH_BOARDS_OF_THE_BEST } from './BoardBest.queries'
import BoardBestListUI from './BoardBest.presenter'

export default function BoardBestList() {
  const { data } = useQuery<Pick<IQuery, 'fetchBoardsOfTheBest'>, IQueryFetchBoardArgs>(FETCH_BOARDS_OF_THE_BEST)

  return <BoardBestListUI data={data} />
}
