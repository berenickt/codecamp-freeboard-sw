import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  background-color: aliceblue;
`

export const CommentWrapper = styled.div`
  margin-top: 2rem;
  border: 1px solid var(--color-gray-600);
  color: var(--color-gray-600);
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
`

export const CommentTextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
`

export const CommentBtn = styled.button`
  padding: 1rem;
  color: var(--color-white);
  background-color: var(--main-color);
  border-radius: 0;
  border: none;
`
