import { IQuery } from '@/common/types/generated/types'

export interface IBoardBestListUI {
  data?: Pick<IQuery, 'fetchBoardsOfTheBest'>
}
