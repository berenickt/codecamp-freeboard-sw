import { useQuery } from '@apollo/client'
import { useState } from 'react'

import { FETCH_USED_ITEMS_COUNT_ISOLD, FETCHUSED_ITEMS_ISOLD } from './MyProducts.queries'
import { IQuery, IQueryFetchUseditemsISoldArgs } from '@/common/types/generated/types'
import MyMarketsItemsUI from './MyProducts.presenter'

export default function MyProducts() {
  // **** 상태
  const [keyword, setKeyword] = useState('')

  // **** PlayGround
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchUseditemsISold'>, IQueryFetchUseditemsISoldArgs>(
    FETCHUSED_ITEMS_ISOLD,
  )
  const { data: SoldUsedItemCount, refetch: refetchSoldUsedItemsCount } =
    useQuery<Pick<IQuery, 'fetchUseditemsCountISold'>>(FETCH_USED_ITEMS_COUNT_ISOLD)

  const onChangeKeyword = (value: string) => setKeyword(value)

  return (
    <MyMarketsItemsUI
      data={data}
      refetch={refetch}
      count={SoldUsedItemCount?.fetchUseditemsCountISold}
      refetchSoldUsedItemsCount={refetchSoldUsedItemsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  )
}
