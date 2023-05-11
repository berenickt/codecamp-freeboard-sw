import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

import UsedItemQuestionWriteUI from './UsedItemQuestionWrite.presenter'
import { IUpdateUseditemQuestionInput, IUsedItemQuestionWriteProps } from './UsedItemQuestionWrite.types'
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from './UsedItemQuestionWrite.queries'
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from '@/common/types/generated/types'

export default function UsedItemQuestionWrite(props: IUsedItemQuestionWriteProps) {
  const router = useRouter()
  const useditemId = String(router.query.useditemId)

  // console.log('======댓글 수정 아이템=======');
  // console.log(props.element);

  // **** 상태
  const [contents, setContents] = useState('')

  // **** Playground
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, 'createUseditemQuestion'>,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION)
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, 'updateUseditemQuestion'>,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION)

  // **** 상품 질문 댓글 작성
  const onClickCreateQuestion = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId,
          createUseditemQuestionInput: {
            contents,
          },
        },
        // **** refetchQueries : 등록 후 바로 화면에 반영하기 위해 다시 최근 10개를 fetch 요청
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId },
          },
        ],
      })

      Modal.success({ content: '댓글을 성공적으로 등록하였습니다!' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
    // ** 질문댓글등록하고 내용 초기화
    setContents('')
  }

  // **** 상품 질문 댓글 수정
  const onClickUpdateQuestion = async () => {
    if (!contents) {
      alert('내용이 수정되지 않았습니다.')
      return
    }

    try {
      // 빈 객체를 생성 후, 필수값은 미리 넣어놓고, 그외 값들은 값이 있을 때만 백엔드에 전송
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {}
      // 값이 있다면, 해당 객체 속성을 추가
      if (contents) updateUseditemQuestionInput.contents = contents

      if (typeof props.element?._id !== 'string') return
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.element?._id,
          updateUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemQuestionId: props.element?._id },
          },
        ],
      })

      // **** 함수, 배열도 옵셔널체이닝 가능
      // 수정하기 버튼을 클릭할 떄, 수정이 완료되면, 수정여부를 false로
      props.setIsEdit?.(false)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 입력값을 상태에 보내주기
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => setContents(event.target.value)

  return (
    <UsedItemQuestionWriteUI
      onChangeContents={onChangeContents}
      onClickCreateQuestion={onClickCreateQuestion}
      onClickUpdateQuestion={onClickUpdateQuestion}
      contents={contents}
      isEdit={props.isEdit}
      element={props.element}
    />
  )
}
