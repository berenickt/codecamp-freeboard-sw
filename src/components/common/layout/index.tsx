import { useRouter } from 'next/router'

import * as S from './Layout.styles'
import LayoutBanner from './banner/LayoutBanner.container'
import LayoutHeader from './header/LayoutHeader.container'
import LayoutNavigation from './navigation/LayoutNavigation.container'
import LayoutFooter from './footer/LayoutFooter.container'
import RecentWtachUsedItem from '../useditem-recent-watch/RecentWatchProduct.container'
import { ILayoutProps } from './Layout.types'

// const HIDDEN_BANNER = ['/login', '/signup', '/boards', '/products', '/test/rest-dogs', '/test/my-firebase']
const SHOW_BANNER = ['/']
const HIDDEN_NAVIGATION = ['/login', '/signup']
// const SHOW_RECENT_WATCH_USEDITEM = ['/usedItem']

export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  // console.log('======= 페이지별 경로 ======')
  // console.log(router.asPath)

  const SHOW_RECENT_WATCH_USEDITEM = ['/usedItem', router.asPath]

  // **** 레이아웃을 숨길 페이지에 페이지별로 이동한 경로가 포함되어있는지 boolean 여부
  const isShowBanner = SHOW_BANNER.includes(router.asPath)
  const isShowRecentWatchUsedItem = SHOW_RECENT_WATCH_USEDITEM.includes(router.asPath)
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath)

  return (
    <>
      {/* 숨길페이지가 없으면, LayoutHeader 보여주기 */}
      <LayoutHeader />
      {!isHiddenNavigation && <LayoutNavigation />}
      {isShowBanner && <LayoutBanner />}
      <S.Body>{props.children}</S.Body>
      {isShowRecentWatchUsedItem && <RecentWtachUsedItem />}
      <LayoutFooter />
    </>
  )
}
