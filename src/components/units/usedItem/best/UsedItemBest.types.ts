import { IQuery } from '@/common/types/generated/types'

export interface IUsedItemBestListUIProps {
  data?: Pick<IQuery, 'fetchUseditemsOfTheBest'>
  onClickResentUsedItem: (usedItem: any) => () => void
}
