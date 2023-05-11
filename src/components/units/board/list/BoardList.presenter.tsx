import { v4 as uuidv4 } from 'uuid'

import * as S from './BoardList.styles'
import SearchbarsBoardList from '@/components/common/searchbars/boardList/SearchbarsBoardList.container'
import BoardBestList from '../best/BoardBest.container'
import SearchDate from '@/components/common/searchbars/Date/SearchDate.container'
import Paginations01 from '@/components/common/paginations/01/Paginations01.container'
import { IBoardListUIProps } from './BoardList.types'
import { getDate } from '@/common/libraries/utils'

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <BoardBestList />
      <S.SearchWrapper>
        <SearchbarsBoardList
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
        <SearchDate />
      </S.SearchWrapper>
      <S.BoardBorderTop />
      <S.RowHeader>
        <S.ColumnBasic>ID</S.ColumnBasic>
        <S.ColumnTitle>제목</S.ColumnTitle>
        <S.ColumnBasic>작성자</S.ColumnBasic>
        <S.ColumnBasic>날짜</S.ColumnBasic>
      </S.RowHeader>
      {props.data?.fetchBoards.map((element: any) => (
        <S.Row key={element._id}>
          <S.ColumnBasic>{String(element._id).slice(-4).toUpperCase()}</S.ColumnBasic>
          <S.ColumnTitle id={element._id} onClick={props.onClickMoveToBoardDetail}>
            {element.title
              .replaceAll(props.keyword, `!@#$${props.keyword}!@#$`)
              .split('!@#$')
              .map((element: any) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === element}>
                  {element}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{element.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(element.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/writeBoardPen.png" />
          쓰기
        </S.Button>
      </S.BottomWrapper>
      <Paginations01 refetch={props.refetch} count={props.count} />
    </S.Wrapper>
  )
}
