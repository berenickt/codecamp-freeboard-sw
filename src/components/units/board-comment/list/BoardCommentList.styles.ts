import styled from '@emotion/styled'
import { Modal, Rate } from 'antd'

export const CommentListWrapper = styled.div`
  margin: 0 auto;
  width: 700px;
  margin-top: 1.4rem;
  border-bottom: 1px solid lightgray;
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`

// **** 댓글 아바타
export const AvatarWrapper = styled.div``
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`

// **** 댓글 내용
export const MainWrapper = styled.div`
  width: 58rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 0.8rem;
`
export const MainTitleWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
`
export const Writer = styled.div`
  font-weight: 900;
  font-size: 1.1rem;
  height: 1.5rem;
`
export const Star = styled(Rate)`
  padding-left: 20px;
`
export const Contents = styled.div`
  color: var(--color-black);
  margin-top: 0.3rem;
`
export const DateString = styled.div`
  color: var(--color-gray-600);
  margin-top: 0.5rem;
`

// **** 댓글 작성자 옵션
export const OptionWrapper = styled.div`
  display: flex;
`
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

// **** 패스워드 모달
export const PasswordModal = styled(Modal)``

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`
