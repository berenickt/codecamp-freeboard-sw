import { v4 as uuidv4 } from 'uuid'

import * as S from './MyProducts.styles'
import { IMyMarketsItemsUIProps } from './MyProducts.types'
import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'
import MyPageSideBar from '@/components/common/myPageSidebar/MyPageSiderbar.container'
import MyPageUseditemNavigation from '@/components/common/mypage-useditem-navigation/MyPageUseditemNavigation.presenter'
import SearchbarsMyPage from '@/components/common/searchbars/myPage/SearchbarsMyPage.container'
import { getDate } from '@/common/libraries/utils'

export default function MyMarketsItemsUI(props: IMyMarketsItemsUIProps) {
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
        {props.data?.fetchUseditemsISold.map(element => (
          <S.Row key={element._id}>
            <S.ColumnBasic>{String(element._id).slice(-4).toUpperCase()}</S.ColumnBasic>
            <S.ColumnTitle id={element._id} onClick={onClickMoveToPage(`/useditem/${element._id}`)}>
              {element.name
                .replaceAll(props.keyword, `!@#$${props.keyword}!@#$`)
                .split('!@#$')
                .map(element => (
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
      </S.Section>
    </S.FlexWrapper>
  )
}
