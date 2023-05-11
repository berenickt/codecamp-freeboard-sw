import { IQuery } from '@/common/types/generated/types'
import { MouseEvent } from 'react'

export interface IUsedItemDetailUIProps {
  data?: Pick<IQuery, 'fetchUseditem'>
  onClickDelete: () => void
  onClickPay: (event: MouseEvent<HTMLButtonElement>) => Promise<void>
  onClickPick: (event: MouseEvent<HTMLButtonElement>) => Promise<void>
  onClickBasket: (element: any) => void
}
