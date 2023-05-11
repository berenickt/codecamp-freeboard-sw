import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1rem;
`

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #333;
`

// ****  버튼
export const ButtonWrapper = styled.div`
  display: flex;
`

export const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
`

// **** 답변
export const AnswerListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
  color: var(--color-black);
  border-top: 1px solid var(--color-gray-600);
`

// **
export const AnswerListInner = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`

export const AnswerContents = styled.div`
  margin-left: 1rem;
  width: 100%;
  font-size: 1.2rem;
`

export const UserName = styled.div`
  font-size: 1.5rem;
  align-items: center;
`

export const Date = styled.div`
  font-size: 0.1rem;
  color: var(--color-gray-500);
  align-items: center;
`

export const CommentQuestinoContents = styled.p`
  padding: 1rem 0 0 1rem;
  font-size: 1.5rem;
`
