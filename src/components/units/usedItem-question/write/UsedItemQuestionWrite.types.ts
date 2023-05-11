import { IUseditemQuestion } from '@/common/types/generated/types'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export interface IUsedItemQuestionWriteProps {
  isEdit?: boolean
  setIsEdit?: Dispatch<SetStateAction<boolean>>
  element?: IUseditemQuestion
}

export interface IUsedItemQuestionWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onClickCreateQuestion: () => void
  onClickUpdateQuestion: () => void
  contents: string
  isEdit?: boolean
  element?: IUseditemQuestion
}

export interface IUpdateUseditemQuestionInput {
  contents?: string
}
