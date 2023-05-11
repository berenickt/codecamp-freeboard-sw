import styled from '@emotion/styled'

export const SearchDateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 35rem;
  /* height: 5rem; */

  .ant-picker-range {
    height: 5rem;
  }
`

export const SearchDateBtn = styled.button`
  width: 10rem;
  height: 4.5rem;
  margin-left: 0.9rem;
  font-size: 1.5rem;
  line-height: 24px;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`
