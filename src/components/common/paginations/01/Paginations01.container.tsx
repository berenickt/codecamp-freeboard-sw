import { MouseEvent, useState } from 'react'

import Paginations01UI from './Paginations01.presenter'
import { IPaginations01Props } from './Paginations01.types'

export default function Paginations01(props: IPaginations01Props) {
  // **** 상태
  const [startPage, setStartPage] = useState(1)
  const [activedPage, setActivedPage] = useState(1) // 페이지 색깔
  const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0

  // **** 번호 페이지 마우스 클릭
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id)
    setActivedPage(activedPage)
    void props.refetch({ page: activedPage })
  }

  // **** 이전 페이지
  const onClickPrevPage = () => {
    if (startPage === 1) return
    setStartPage(startPage - 10)
    setActivedPage(startPage - 10)
    void props.refetch({ page: startPage - 10 })
  }

  // **** 다음 페이지
  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10)
      setActivedPage(startPage + 10)
      void props.refetch({ page: startPage + 10 })
    }
  }

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  )
}
