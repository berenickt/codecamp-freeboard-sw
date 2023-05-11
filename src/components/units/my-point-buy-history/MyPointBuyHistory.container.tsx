import MyPointBuyHistoryUI from './MyPointBuyHistory.presenter'
import { useQuery } from '@apollo/client'
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from './MyPointBuyHistory.queries'

export default function MyPointBuyHistory() {
  // **** PlayGround
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING)

  return <MyPointBuyHistoryUI data={data} />
}
