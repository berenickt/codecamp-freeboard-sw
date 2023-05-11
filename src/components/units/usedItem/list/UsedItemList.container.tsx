import { useQuery } from '@apollo/client'
import { FETCH_USED_ITEMS } from './UsedItemList.queries'
import { useRecoilState } from 'recoil'
import UsedItemListUI from './UsedItemList.presenter'
import { useState } from 'react'

import { IQuery, IQueryFetchUseditemsArgs, IUseditem } from '@/common/types/generated/types'
import { isToday } from '@/common/store'

export default function UsedItemList() {
  // **** 상태
  const [keyword, setKeyword] = useState('')
  const [, setIsClick] = useRecoilState(isToday)

  // **** PlayGround
  const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS)

  // **** 상품리스트 무한스크롤
  const onLoadMore = () => {
    if (!data) return

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) return { fetchUseditems: [...prev.fetchUseditems] }
        return {
          fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems],
        }
      },
    })
  }

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

  const onChangeKeyword = (value: string) => setKeyword(value)

  return (
    <UsedItemListUI
      keyword={keyword}
      data={data}
      onLoadMore={onLoadMore}
      onClickResentUsedItem={onClickResentUsedItem}
      onChangeKeyword={onChangeKeyword}
    />
  )
}
