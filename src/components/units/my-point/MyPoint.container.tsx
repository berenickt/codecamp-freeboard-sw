import { useQuery } from '@apollo/client'

import MyPointUI from './MyPoint.presenter'
import { FETCH_POINT_TRANSACTIONS } from './MyPoint.queries'

export default function MyPoint() {
  // **** PlayGround
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS)

  return <MyPointUI data={data} />
}
