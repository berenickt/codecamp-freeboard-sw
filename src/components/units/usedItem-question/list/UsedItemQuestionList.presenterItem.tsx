import { Modal } from 'antd'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CloseOutlined, EditFilled } from '@ant-design/icons'

import * as S from './UsedItemQuestionList.styles'
import UsedItemQuestionWrite from '../write/UsedItemQuestionWrite.container'
import { IUsedItemQuestionListUIItemProps } from './UsedItemQuestionList.types'
import { DELETE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTIONS } from './UsedItemQuestionList.queries'
import UsedItemAnswerList from '../../usedItem-answer/list/UsedItemAnswerList.container'
import UseritemAnswerWrite from '../../usedItem-answer/write/UsedItemAnswerWrite.container'

export default function UsedItemQuestionListUIItem(props: IUsedItemQuestionListUIItemProps) {
  const router = useRouter()

  // **** 상태
  const [isEdit, setIsEdit] = useState(false) // (질문수정1) 수정여부 state
  const [isReply, setIsReply] = useState(false) // 질문댓글 여부

  // **** PlayGorund
  const [delementeteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION)

  // **** 상품 질문 삭제
  const onClickDelementeteQuestion = async () => {
    try {
      await delementeteUseditemQuestion({
        variables: {
          useditemQuestionId: props.element?._id,
        },
        // refetchQueries : 삭제 후 바로 화면에 반영하기 위해 다시 최근 10개를 fetch 요청
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      })
      Modal.success({ content: '댓글을 삭제했습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 댓글 수정,  (댓글수정2) 수정버튼을 클릭했을 떄
  const onClickUpdate = () => setIsEdit(prev => !prev)

  // **** 질문여부
  const onClickWriter = () => setIsReply(prev => !prev)

  return (
    <>
      <S.BorderTop />
      {/* (질문수정3) 수정 여부가 false면, 기존 내용을 조건렌더링 */}
      {!isEdit && (
        <S.CommentListWrapper key={props.element?._id}>
          <S.CommentListContainer>
            <S.Avatar src="/images/avatar.png" alt="유저아이콘" />
            <S.CommentContents>
              <S.UserName>{props.element?.user.name}</S.UserName>
              <S.Date>{props.element?.createdAt.slice(0, 10)}</S.Date>
            </S.CommentContents>
            <S.ButtonWrapper>
              <S.Button onClick={onClickUpdate}>
                <EditFilled />
              </S.Button>
              <S.Button onClick={onClickDelementeteQuestion} id={props.element?._id}>
                <CloseOutlined />
              </S.Button>
              <S.Button onClick={onClickWriter} id={props.element?._id}>
                답변
              </S.Button>
            </S.ButtonWrapper>
          </S.CommentListContainer>
          <S.CommentQuestinoContents>{props.element?.contents}</S.CommentQuestinoContents>
          {/* 질문답변 */}
          <S.ReplyWrapper>
            {isReply && <UseritemAnswerWrite isReply={true} element={props.element} setIsReply={setIsReply} />}
            <UsedItemAnswerList element={props.element} />
          </S.ReplyWrapper>
        </S.CommentListWrapper>
      )}
      {/* (질문댓글수정4) 수정 여부가 true면, 수정할 내용을 조건렌더링 */}
      {isEdit && <UsedItemQuestionWrite isEdit={true} setIsEdit={setIsEdit} element={props.element} />}
    </>
  )
}
