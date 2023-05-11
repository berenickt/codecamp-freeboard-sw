import { useQuery } from '@apollo/client'

import MyPageSiderbarUI from './MyPageSiderbar.presenter'
import { FETCH_USER_LOGGED_IN } from './MyPageSiderbar.queries'

export default function MyPageSideBar() {
  // **** PlayGround 요청
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)

  return <MyPageSiderbarUI loginData={loginData} />
}
