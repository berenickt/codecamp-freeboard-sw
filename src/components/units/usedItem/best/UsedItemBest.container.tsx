import { useQuery } from '@apollo/client'
import { useRecoilState } from 'recoil'

import UsedItemBestListUI from './UsedItemBest.presenter'
import { FETCH_USEDITEM_OF_THE_BEST } from './UsedItemBest.queries'
import { IQuery, IQueryFetchUseditemArgs, IUseditem } from '@/common/types/generated/types'
import { isToday } from '@/common/store'

export default function UsedItemBestList() {
  const [, setIsClick] = useRecoilState(isToday)

  const { data } = useQuery<Pick<IQuery, 'fetchUseditemsOfTheBest'>, IQueryFetchUseditemArgs>(
    FETCH_USEDITEM_OF_THE_BEST,
  )

  // **** 최근 본 상품 담기
  const onClickResentUsedItem = (usedItem: IUseditem) => () => {
    // 1. 기존 장바구니 가져오기, 문자열을 JSON으로 바꿔서 저장, 없다면 빈 배열
    const recents = JSON.parse(localStorage.getItem('recentUsedItems') ?? '[]')

    // 2. 이미 담겼는지 확인하기
    const temp = recents.filter((element: IUseditem) => element._id === usedItem._id)
    if (temp.length === 1) return

    setIsClick(prev => !prev)

    // 3. 최근 본 상품에 담기, JSON을 문자열로 바꿔서 저장
    if (recents.length >= 3) recents.pop()
    recents.unshift(usedItem)
    localStorage.setItem('recentUsedItems', JSON.stringify(recents))
  }

  return <UsedItemBestListUI data={data} onClickResentUsedItem={onClickResentUsedItem} />
}
