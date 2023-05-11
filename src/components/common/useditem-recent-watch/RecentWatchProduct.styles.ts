import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Wrapper = styled.div`
  position: fixed;
  top: 37rem;
  right: 4rem;
  z-index: 100;
  width: 11.5rem;
  height: 36rem;
  border: 1px solid var(--color-black);
  background-color: var(--color-white);
  padding: 1.5rem;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 22px;
`

export const Row = styled.div`
  cursor: pointer;
`

export const Images = styled.img`
  width: 8.5rem;
  height: 8.5rem;
  background-color: var(--color-gray-200);
  margin-bottom: 1rem;
`
