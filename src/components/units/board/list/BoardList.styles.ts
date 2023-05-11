import styled from '@emotion/styled'
import { ITextTokenProps } from './BoardList.types'

export const Wrapper = styled.div`
  width: 100rem;
`

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BoardBorderTop = styled.div`
  border-top: 2px solid gray;
`

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`

export const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 52px;
  border-bottom: 1px solid gray;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 52px;
  border-bottom: 1px solid gray;

  &:hover {
    background-color: var(--main-color-5);
  }
`

export const ColumnBasic = styled.div`
  width: 15%;
  text-align: center;
  cursor: pointer;
`

export const ColumnTitle = styled.div`
  width: 55%;
  text-align: center;
  cursor: pointer;
`

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? 'red' : 'black')};
`

// **** 게시판 목록 하단 버튼
export const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const PencilIcon = styled.img`
  margin-right: 0.6rem;
`

export const Button = styled.button`
  margin: 0.4rem;
  padding: 1rem 1.5rem;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`
