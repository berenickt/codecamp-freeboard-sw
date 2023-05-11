import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { MouseEvent } from 'react'

import { IQuery, IQueryFetchBoardsArgs } from '@/common/types/generated/types'

export interface IBoardListUIProps {
  data?: Pick<IQuery, 'fetchBoards'>
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>
  onClickMoveToBoardNew: () => void
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  count?: number
  refetchBoardsCount: (
    variables: Partial<OperationVariables>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoardsCount'>>>
  keyword: string | RegExp
  onChangeKeyword: (value: string) => void
}

export interface ITextTokenProps {
  isMatched: boolean
}
