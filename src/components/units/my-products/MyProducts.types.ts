import { ApolloQueryResult, OperationVariables } from '@apollo/client'

import { IQuery, IQueryFetchUseditemsISoldArgs } from '@/common/types/generated/types'

export interface IMyMarketsItemsUIProps {
  data?: Pick<IQuery, 'fetchUseditemsISold'>
  refetch: (
    variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditemsISold'>>>
  count?: number
  refetchSoldUsedItemsCount: (
    variables: Partial<OperationVariables>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditemsCountISold'>>>
  keyword: string | RegExp
  onChangeKeyword: (value: string) => void
}
