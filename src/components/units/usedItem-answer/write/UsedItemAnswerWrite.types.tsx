import { ChangeEvent, MouseEvent } from 'react'

export interface IUseritemAnswerWriteProps {
  isReply: boolean
  element?: any
  setIsReply: any
}

export interface IUseritemAnswerWriteUIProps {
  data?: any
  isReply: boolean
  replyEl?: any
  element?: any
  contents?: String
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onClickCreateAnswer: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdateAnswer: (event: MouseEvent<HTMLButtonElement>) => void
}
