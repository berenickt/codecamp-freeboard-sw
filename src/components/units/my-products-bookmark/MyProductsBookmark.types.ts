import { ApolloQueryResult } from '@apollo/client'

import { IQuery, IQueryFetchUseditemsIPickedArgs } from '@/common/types/generated/types'

export interface IMyProductsBookmarkUIProps {
  data?: Pick<IQuery, 'fetchUseditemsIPicked'>
  refetch: (
    variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditemsIPicked'>>>
  count?: number
  refetchSoldUsedItemsCount: any
  keyword: string | RegExp
  onChangeKeyword: (value: string) => void
}
