import _ from 'lodash'
import { ChangeEvent } from 'react'

import { ISearchbarsBoardListProps } from './SearchbarsMyPage.types'
import SearchbarsMyPageUI from './SearchbarsMyPage.presenter'

export default function SearchbarsMyPage(props: ISearchbarsBoardListProps) {
  // **** 검색이 될 떄마다 0.2초 쉬고, debounce(특정 시간 이내에 추가 입력이 없으면 1번 실행하는 것) 실행
  const getDebounce = _.debounce((value: string) => {
    // 디바운싱이 이뤄진 이후엔 검색 키워드로 refetch
    void props.refetch({ search: value, page: 1 })

    // 검색 결과 갯수에 따라서 페이지네이션이 바뀌기 때문에 함수로 만들어 내려줍니다.
    void props.refetchBoardsCount({ search: value })

    // 검색 결과와 일치하는 키워드에 색깔 입혀주기
    props.onChangeKeyword(value)
  }, 200)

  // **** 검색 입력값 받기
  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value)
  }

  return <SearchbarsMyPageUI onChangeSearchbar={onChangeSearchbar} />
}
