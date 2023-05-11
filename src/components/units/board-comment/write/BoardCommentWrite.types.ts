import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { IBoardComment } from '@/common/types/generated/types'

export interface IBoardCommentWriteProps {
  isEdit?: boolean
  setIsEdit?: Dispatch<SetStateAction<boolean>>
  element?: IBoardComment
}

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onClickWrite: () => void
  onClickUpdate: () => void
  writer: string
  password: string
  contents: string
  setStar: Dispatch<SetStateAction<number>>
  isEdit?: boolean
  element?: IBoardComment
}

export interface IUpdateBoardCommentInput {
  contents?: string
  rating?: number
}
