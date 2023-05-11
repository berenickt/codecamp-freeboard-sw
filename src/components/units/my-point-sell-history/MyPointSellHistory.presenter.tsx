import MyPageSideBar from '@/components/common/myPageSidebar/MyPageSiderbar.container'
import * as S from './MyPointSellHistory.styles'
import MyPagePointNavigation from '@/components/common/mypage-point-navigation/MyPagePointNavigation.presenter'
import { getDate } from '@/common/libraries/utils'
import Paginations01 from '@/components/common/paginations/01/Paginations01.container'

export default function MyPointSellHistoryUI(props: any) {
  return (
    <S.FlexWrapper>
      <MyPageSideBar />
      <S.Section>
        <S.FlexBetweenWrapper>
          <MyPagePointNavigation />
        </S.FlexBetweenWrapper>

        <S.BoardBorderTop />
        <S.RowHeader>
          <S.ColumnBasic>번호</S.ColumnBasic>
          <S.ColumnTitle>내용</S.ColumnTitle>
          <S.ColumnBasic>금액</S.ColumnBasic>
          <S.ColumnBasic>잔액</S.ColumnBasic>
          <S.ColumnBasic>날짜</S.ColumnBasic>
        </S.RowHeader>
        {props.data?.fetchPointTransactionsOfSelling.map((element: any) => (
          <S.Row key={element._id}>
            <S.ColumnBasic>{String(element._id).slice(-4).toUpperCase()}</S.ColumnBasic>
            <S.ColumnTitle>{element.status}</S.ColumnTitle>
            <S.ColumnBasic>{element.amount}원</S.ColumnBasic>
            <S.ColumnBasic>{element.balance}원</S.ColumnBasic>
            <S.ColumnBasic>{getDate(element.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <Paginations01 refetch={props.refetch} count={props.count} />
      </S.Section>
    </S.FlexWrapper>
  )
}
