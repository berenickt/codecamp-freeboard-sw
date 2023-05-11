import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const MenuNavigation = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  color: white;
  border-bottom: 1px solid var(--color-gray-600);

  @media ${breakPoints.tablet} {
    justify-content: center;
  }

  @media ${breakPoints.mobile} {
    justify-content: space-between;
  }
`

export const Item = styled.div`
  margin: 0px 60px;
  color: var(--color-black);
  font-weight: 900;
  cursor: pointer;

  &:hover {
    color: var(--color-gray-600);
  }
`
