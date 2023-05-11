import { useQuery } from '@apollo/client'
import MyPointSellHistoryUI from './MyPointSellHistory.presenter'
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from './MyPointSellHistory.queries'

export default function MyPointSellHistory() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING)

  return <MyPointSellHistoryUI data={data} />
}
