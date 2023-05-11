import { useQuery } from '@apollo/client'

import { FETCH_USED_ITEMS_COUNT_I_BOUGHT, FETCH_USED_ITEMS_I_BOUGHT } from './MyProductsPurchased.queries'
import MyMarketsItemsUI from './MyProductsPurchased.presenter'

export default function MyProductsPurchaed() {
  // **** 상태

  // **** PlayGround
  const { data, refetch } = useQuery(FETCH_USED_ITEMS_I_BOUGHT)
  const { data: dataCount } = useQuery(FETCH_USED_ITEMS_COUNT_I_BOUGHT)

  return <MyMarketsItemsUI data={data} refetch={refetch} dataCount={dataCount} />
}
