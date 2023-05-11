import { useQuery } from '@apollo/client'

import MyPointChargeHistoryUI from './MyPointChargeHistory.presenter'
import { FETCH_POINT_TRANSACTIONS_OF_LOADING } from './MyPointChargeHistory.queries'

export default function MyPointChargeHistory() {
  // **** PlayGround
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING)

  return <MyPointChargeHistoryUI data={data} />
}
