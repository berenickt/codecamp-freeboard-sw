import { useEffect, useState } from 'react'

import * as S from './RecentWatchProduct.styles'
import { IUseditem } from '@/common/types/generated/types'
import { useMoveToPage } from '../hooks/useMoveToPage'

export default function RecentWtachUsedItem() {
  const { onClickMoveToPage } = useMoveToPage()

  // **** 상태
  const [recentUseditems, setRecentUseditems] = useState([])

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem('recentUsedItems') ?? '[]')
    setRecentUseditems(baskets)
  }, [])

  // useEffect(() => {}, [basketItems])

  return (
    <S.Wrapper>
      <S.Title>최근 본 상품</S.Title>
      {recentUseditems?.map((element: IUseditem) => (
        <S.Row key={element._id}>
          <S.Images
            onClick={onClickMoveToPage(`/usedItem/${element._id}`)}
            src={
              element?.images?.[0] ?? element?.images?.[1]
                ? `https://storage.googleapis.com/${element.images[0] ?? element.images[1]} `
                : '/images/no-image.png'
            }
          />
        </S.Row>
      ))}
    </S.Wrapper>
  )
}
