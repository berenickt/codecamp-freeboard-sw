import { useState } from 'react'

export function useSearch() {
  const [keyword, setKeyword] = useState('') // 검색

  const onChangeKeyword = (value: string) => setKeyword(value)

  return {
    keyword,
    onChangeKeyword,
  }
}
