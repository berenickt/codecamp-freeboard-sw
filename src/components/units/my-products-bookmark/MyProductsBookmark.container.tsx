import { useState } from 'react'
import { useQuery } from '@apollo/client'

import MyProductsBookmarkUI from './MyProductsBookmark.presenter'
import { FETCH_USED_ITEMS_IPICKED, FETCH_USED_ITEMS_COUNT_IPICKED } from './MyProductsBookmark.queries'
import { IQuery, IQueryFetchUseditemsIPickedArgs } from '@/common/types/generated/types'

export default function MyProductsBookmark() {
  // **** 상태
  const [keyword, setKeyword] = useState('')

  // **** PlayGround
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchUseditemsIPicked'>, IQueryFetchUseditemsIPickedArgs>(
    FETCH_USED_ITEMS_IPICKED,
    { variables: { search: '' } },
  )
  const { data: PickedUsedItemCount, refetch: refetchPickedUsedItemsCount } =
    useQuery<Pick<IQuery, 'fetchUseditemsCountISold'>>(FETCH_USED_ITEMS_COUNT_IPICKED)

  const onChangeKeyword = (value: string) => setKeyword(value)

  return (
    <MyProductsBookmarkUI
      data={data}
      refetch={refetch}
      count={PickedUsedItemCount?.fetchUseditemsCountISold}
      refetchSoldUsedItemsCount={refetchPickedUsedItemsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  )
}
