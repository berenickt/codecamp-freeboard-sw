import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100rem;
  margin: 0 auto;
`

export const BasketTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-top: 3rem;
`

export const BasketPoint = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: var(--color-gray-700);
`

export const BorderTop = styled.div`
  border-top: 2px solid var(--color-black);
  margin: 1rem 0;
`

export const BasketItems = styled.div`
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-600);
  padding: 2% 0;
  margin-bottom: 2%;

  button {
    padding: 1rem;
    border: 1px solid var(--color-gray-600);
    border-radius: 1rem;
  }
`

export const Column = styled.div`
  width: 25%;
`
