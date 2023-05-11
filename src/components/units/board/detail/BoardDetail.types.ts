import { IQuery } from '@/common/types/generated/types'
import { MouseEvent } from 'react'

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, 'fetchBoard'>
  onClickDeleteBtn: (event: MouseEvent<HTMLButtonElement>) => void
  onClickLike: () => void
  onClickDislike: () => void
}
