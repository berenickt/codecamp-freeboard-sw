import { IQuery } from '@/common/types/generated/types'

export interface IUsedItemListUIProps {
  data?: Pick<IQuery, 'fetchUseditems'>
  onLoadMore: () => void
  onClickResentUsedItem: (usedItem: any) => () => void
  keyword: string | RegExp
  onChangeKeyword: (value: string) => void
}

export interface ITextTokenProps {
  isMatched: boolean
}
