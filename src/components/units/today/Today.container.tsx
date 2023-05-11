import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import * as S from './Today.styles'
import { isToday } from '@/common/store'
import { IUseditem } from '@/common/types/generated/types'

export default function TodayPage() {
  const NewDate = new Date()
  const yyyy = NewDate.getFullYear()
  const mm = NewDate.getMonth() + 1
  const dd = NewDate.getDate()
  const date = `${yyyy}-${mm}-${dd}`

  const [isClick] = useRecoilState(isToday)
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(date) ?? '[]')
    setBasketItems(baskets)
  }, [isClick])

  return (
    <S.Today>
      <S.TodayTitle>오늘 본 상품</S.TodayTitle>
      {basketItems.map((el: IUseditem) => (
        <S.MyRow key={el._id}>
          <S.MyColumn>{el?.name}</S.MyColumn>
          <S.MyColumn>{el?.remarks}</S.MyColumn>
        </S.MyRow>
      ))}
    </S.Today>
  )
}
