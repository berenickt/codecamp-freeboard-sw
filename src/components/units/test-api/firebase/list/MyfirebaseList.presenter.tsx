import { v4 as uuidv4 } from 'uuid'

import * as S from './MyfirebaseList.styles'
import { IMyfirebaseListUIProps } from './MyfirebaseList.types'

export default function MyfirebaseListUI(props: IMyfirebaseListUIProps) {
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnBasic>번호</S.ColumnBasic>
        <S.ColumnBasic>제목</S.ColumnBasic>
        <S.ColumnContents>내용</S.ColumnContents>
        <S.ColumnBasic>작성자</S.ColumnBasic>
      </S.Row>
      {props.dataBoards?.map((element: any, index: number) => (
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnBasic>{element.title}</S.ColumnBasic>
          <S.ColumnContents>{element.contents}</S.ColumnContents>
          <S.ColumnBasic>{element.writer}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/writeBoardPen.png" />
          게시물 등록
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  )
}
