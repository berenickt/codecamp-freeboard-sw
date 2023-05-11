import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries'
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './BoardCommentWrite.queries'
import { IBoardCommentWriteProps, IUpdateBoardCommentInput } from './BoardCommentWrite.types'
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from '@/common/types/generated/types'

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter()

  // console.log('======댓글 수정 아이템=======');
  // console.log(props.element);

  // **** 상태
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [contents, setContents] = useState('')
  const [star, setStar] = useState(0)

  // **** Playground
  const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(
    CREATE_BOARD_COMMENT,
  )
  const [updateBoardComment] = useMutation<Pick<IMutation, 'updateBoardComment'>, IMutationUpdateBoardCommentArgs>(
    UPDATE_BOARD_COMMENT,
  )

  // **** 입력값을 상태에 보내주기
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => setWriter(event.target.value)
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => setContents(event.target.value)

  // **** 댓글 작성
  const onClickWrite = async () => {
    if (typeof router.query.id !== 'string') return

    try {
      await createBoardComment({
        variables: {
          boardId: router.query.id,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
        },
        // **** refetchQueries : 등록 후 바로 화면에 반영하기 위해 다시 최근 10개를 fetch 요청
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }

    // ** 댓글등록하고 내용 초기화
    setWriter('')
    setPassword('')
    setContents('')
  }

  // **** 댓글 수정
  const onClickUpdate = async () => {
    if (!contents) {
      alert('내용이 수정되지 않았습니다.')
      return
    }
    if (!password) {
      alert('비밀번호가 입력되지 않았습니다.')
      return
    }

    try {
      // 빈 객체를 생성 후, 필수값은 미리 넣어놓고, 그외 값들은 값이 있을 때만 백엔드에 전송
      const updateBoardCommentInput: IUpdateBoardCommentInput = {}
      // 값이 있다면, 해당 객체 속성을 추가
      if (contents) updateBoardCommentInput.contents = contents
      // 별점은 다를 떄만, 수정
      if (star !== props.element?.rating) updateBoardCommentInput.rating = star

      if (typeof props.element?._id !== 'string') return
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.element?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
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

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      writer={writer}
      password={password}
      contents={contents}
      setStar={setStar}
      isEdit={props.isEdit}
      element={props.element}
    />
  )
}
