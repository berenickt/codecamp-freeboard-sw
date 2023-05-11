import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { ChangeEvent, useState } from 'react'

import * as S from './BoardCommentList.styles'
import BoardCommentWrite from '../write/BoardCommentWrite.container'
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import { IBoardCommentListUIItemProps } from './BoardCommentList.types'
import { IMutation, IMutationDeleteBoardCommentArgs } from '@/common/types/generated/types'
import { getDate } from '@/common/libraries/utils'

export default function BoardCommentListUIItem(props: IBoardCommentListUIItemProps) {
  const router = useRouter()

  // **** 상태
  const [isEdit, setIsEdit] = useState(false) // (댓글수정1) 수정여부 state
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false) // (댓글삭제2)
  const [myPassword, setMyPassword] = useState('') // 입력받은 비밀번호

  // **** PlayGorund
  const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(
    DELETE_BOARD_COMMENT,
  )

  // **** 댓글 수정,  (댓글수정2) 수정버튼을 클릭했을 떄
  const onClickUpdate = () => setIsEdit(true)

  // **** 댓글 삭제
  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.element?._id,
        },
        // refetchQueries : 삭제 후 바로 화면에 반영하기 위해 다시 최근 10개를 fetch 요청
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.id) },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
    setIsOpenDeleteModal(prev => !prev)
  }

  // **** 댓글 삭제모달 열기, (댓글삭제1)
  const onClickOpenDeleteModal = () => setIsOpenDeleteModal(prev => !prev)

  // **** 댓글 삭제 시 비밀번호 입력받기
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => setMyPassword(event.target.value)

  return (
    <>
      {/* (댓글삭제3) 삭제모달이 열리면, 비밀번호 입력모달 조건렌더링 */}
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete} onCancel={onClickOpenDeleteModal}>
          <div>비밀번호를 입력해주세요</div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {/* (댓글수정3) 수정 여부가 false면, 기존 내용을 조건렌더링 */}
      {!isEdit && (
        <S.CommentListWrapper>
          <S.FlexWrapper>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avatar.png" />
            </S.AvatarWrapper>
            <S.MainWrapper>
              <S.MainTitleWrapper>
                <S.Writer>{props.element?.writer}</S.Writer>
                <S.Star value={props.element?.rating} disabled />
              </S.MainTitleWrapper>
              <S.Contents>{props.element?.contents}</S.Contents>
              <S.DateString>{getDate(props.element?.createdAt)}</S.DateString>
            </S.MainWrapper>
            <S.OptionWrapper>
              {/* 댓글 수정, 삭제  */}
              <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" onClick={onClickUpdate} />
              <S.DeleteIcon src="/images/boardComment/list/option_delete_icon.png/" onClick={onClickOpenDeleteModal} />
            </S.OptionWrapper>
          </S.FlexWrapper>
        </S.CommentListWrapper>
      )}
      {/* (댓글수정4) 수정 여부가 true면, 수정할 내용을 조건렌더링 */}
      {isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} element={props.element} />}
    </>
  )
}
