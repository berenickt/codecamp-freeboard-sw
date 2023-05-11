import styled from '@emotion/styled'

export const CommentQuentionWrapper = styled.article`
  margin: 1rem 0;
`

export const Contents = styled.textarea`
  width: 100%;
  min-height: 12rem;
  padding: 1rem;
  font-size: 1.2rem;
  background: var(--color-gray-200);
  box-sizing: border-box;
`

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`

export const ContentsLength = styled.div`
  width: 100%;
  align-self: center;
  padding-left: 1rem;
  color: var(--color-gray-500);
`

export const Button = styled.button`
  width: 20rem;
  height: 4rem;
  background-color: var(--main-color);
  color: var(--color-white);
  cursor: pointer;
`
