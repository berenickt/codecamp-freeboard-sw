import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { useState, ChangeEvent } from 'react'

import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from './UsedItemAnswerWrite.queries'
import UseritemAnswerWriteUI from './UsedItemAnswerWrite.presenter'
import { IUseritemAnswerWriteProps } from './UsedItemAnswerWrite.types'

export default function UseritemAnswerWrite(props: IUseritemAnswerWriteProps) {
  // **** 상태
  const [contents, setContents] = useState('')

  // **** PlayGround
  const [createUseditemQuestionAnswer] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER)
  const [updateUseditemQuestionAnswer] = useMutation(UPDATE_USED_ITEM_QUESTION_ANSWER)

  // **** 답변 생성
  const onClickCreateAnswer = async () => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.element._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.element._id },
          },
        ],
      })
      setContents('')
      props.setIsReply(false)
      console.log(result)
      Modal.success({ content: '댓글이 등록되었습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 답변 수정
  const onClickUpdateAnswer = async () => {
    try {
      const result1 = await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props.element._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.element._id },
          },
        ],
      })
      setContents('')
      console.log(result1)
      Modal.success({ content: '댓글 수정이 완료되었습니다' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 값 전달
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => setContents(event.target.value)

  return (
    <UseritemAnswerWriteUI
      onChangeContents={onChangeContents}
      onClickCreateAnswer={onClickCreateAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
      replyEl={props.element}
      isReply={true}
      contents={contents}
    />
  )
}
