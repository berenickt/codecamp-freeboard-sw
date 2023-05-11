import styled from '@emotion/styled'

export const GridContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px 10px;
`

export const GridItemDogImg = styled.img`
  width: 300px;
  height: 300px;
  background-color: var(--color-gray-200);
`
