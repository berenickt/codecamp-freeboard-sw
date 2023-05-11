import styled from '@emotion/styled'

export const FlexWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  height: auto;
`

export const Section = styled.section`
  width: 88rem;
`

export const FlexBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`

// 데이터 상단
export const BoardBorderTop = styled.div`
  border-top: 2px solid gray;
`

export const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 52px;
  border-bottom: 1px solid gray;
`

// 데이터 하단
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

export interface ITextTokenProps {
  isMatched: boolean
}

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? 'red' : 'black')};
`

export const SectionMain = styled.div`
  width: 100%;

  border: 1px solid #000;
  border-right: none;
  border-left: none;
  display: flex;
  flex-direction: column;
`

export const Row5Th = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(3, 1.5fr);
  text-align: center;
`
export const Row5 = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(3, 1.5fr);
  text-align: center;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
`

export const Row6Th = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(4, 1.5fr);
  text-align: center;
`
export const Row6 = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(4, 1.5fr);
  text-align: center;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
`
export const Th = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000;
`

export const Td = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`
