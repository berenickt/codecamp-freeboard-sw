import { Fragment } from 'react'

import { Item, MenuNavigation } from './LayoutNavigation.styles'
import { useMoveToPage } from '../../hooks/useMoveToPage'

const NAVIGATION_MENUS = [
  // { name: '게시판(FireBase)', page: '/test-api/my-firebase' },
  { name: '강아지 구경(REST)', page: '/test-api/rest-dogs' },
  { name: '게시판', page: '/boards' },
  { name: '중고상품', page: '/useditem' },
  { name: '중고상품 등록', page: '/useditem/new' },
]

export default function LayoutNavigationUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <MenuNavigation>
      {NAVIGATION_MENUS.map(element => (
        <Fragment key={element.page}>
          <Item id={element.page} onClick={onClickMoveToPage(`${element.page}`)}>
            {element.name}
          </Item>
        </Fragment>
      ))}
    </MenuNavigation>
  )
}
