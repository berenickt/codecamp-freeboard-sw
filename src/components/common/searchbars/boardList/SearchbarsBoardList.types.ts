import { ApolloQueryResult } from '@apollo/client'
import { ChangeEvent } from 'react'

import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '@/common/types/generated/types'

export interface ISearchbarsBoardListProps {
  refetch: (variables: Partial<IQueryFetchBoardsArgs>) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoardsCount'>>>
  onChangeKeyword: (value: string) => void
}

export interface ISearchbarsBoardListUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void
}
