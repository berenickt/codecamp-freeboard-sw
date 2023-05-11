import { Modal } from 'antd'
import { useState, MouseEvent } from 'react'
import { useMutation } from '@apollo/client'

import * as S from './UsedItemAnswerList.styles'
import { DELETE_USED_ITEM_ANSWER, FETCH_USEDITEM_QUESTION_ANSWERS } from './UsedItemAnswerList.queries'
import UseritemAnswerWrite from '../write/UsedItemAnswerWrite.container'
import { INestedCommentListItemProps } from './UsedItemAnswerList.types'
import { CloseOutlined, EditFilled } from '@ant-design/icons'

export default function NestedCommentListItem(props: INestedCommentListItemProps) {
  // **** 상태
  const [isReply, setIsReply] = useState(false)

  // **** PlayGround
  const [deleteUseditemQuestionAnswer] = useMutation(DELETE_USED_ITEM_ANSWER)

  // **** 답변 삭제
  const onClickDeleteAnswer = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: (event.target as HTMLButtonElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.element?._id },
          },
        ],
      })
      Modal.success({ content: '댓글을 삭제했습니다!' })
    } catch (error: any) {
      Modal.error({ content: error.message })
    }
  }

  // **** 수정 버튼
  const onClickEdit = () => setIsReply(true)

  // console.log('===========props.replyElement============')
  // console.log(props.replyElement)

  return (
    <div>
      {!isReply && (
        <S.AnswerListWrapper key={props.replyElement._id}>
          <S.AnswerListInner>
            <S.Avatar src="/images/avatar.png" alt="유저아이콘" />
            <S.AnswerContents>
              <S.UserName>{props.replyElement.user.name}</S.UserName>
              <S.Date>{props.replyElement.createdAt.slice(0, 10)}</S.Date>
            </S.AnswerContents>
            <S.ButtonWrapper>
              <S.Button onClick={onClickEdit}>
                <EditFilled />
              </S.Button>
              <S.Button onClick={onClickDeleteAnswer} id={props.replyElement._id}>
                <CloseOutlined />
              </S.Button>
            </S.ButtonWrapper>
          </S.AnswerListInner>
          <S.CommentQuestinoContents>{props.replyElement.contents}</S.CommentQuestinoContents>
        </S.AnswerListWrapper>
      )}
      {isReply && <UseritemAnswerWrite isReply={true} setIsReply={setIsReply} element={props.replyElement} />}
    </div>
  )
}
