import { v4 as uuidv4 } from 'uuid'

import * as S from './MyProductsPurchased.styles'
import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'
import MyPageSideBar from '@/components/common/myPageSidebar/MyPageSiderbar.container'
import MyPageUseditemNavigation from '@/components/common/mypage-useditem-navigation/MyPageUseditemNavigation.presenter'
import SearchbarsMyPage from '@/components/common/searchbars/myPage/SearchbarsMyPage.container'
import { getDate } from '@/common/libraries/utils'
import Paginations01 from '@/components/common/paginations/01/Paginations01.container'

export default function MyMarketsItemsUI(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.FlexWrapper>
      <MyPageSideBar />
      <S.Section>
        <S.FlexBetweenWrapper>
          <MyPageUseditemNavigation />
          <SearchbarsMyPage
            refetch={props.refetch}
            refetchBoardsCount={props.refetchSoldUsedItemsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.FlexBetweenWrapper>

        <S.BoardBorderTop />
        <S.RowHeader>
          <S.ColumnBasic>번호</S.ColumnBasic>
          <S.ColumnTitle>상품명</S.ColumnTitle>
          <S.ColumnBasic>판매가격</S.ColumnBasic>
          <S.ColumnBasic>판매완료</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.RowHeader>
        {props.data?.fetchUseditemsIBought.map((element: any) => (
          <S.Row key={element._id}>
            <S.ColumnBasic>{String(element._id).slice(-4).toUpperCase()}</S.ColumnBasic>
            <S.ColumnTitle id={element._id} onClick={onClickMoveToPage(`/useditem/${element._id}`)}>
              {element.name
                .replaceAll(props.keyword, `!@#$${props.keyword}!@#$`)
                .split('!@#$')
                .map((element: any) => (
                  <S.TextToken key={uuidv4()} isMatched={props.keyword === element}>
                    {element}
                  </S.TextToken>
                ))}
            </S.ColumnTitle>
            <S.ColumnBasic>{element.price}원</S.ColumnBasic>
            <S.ColumnBasic>판매완료</S.ColumnBasic>
            <S.ColumnBasic>{getDate(element.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <Paginations01 refetch={props.refetch} count={props.count} />
      </S.Section>
    </S.FlexWrapper>
  )
}
