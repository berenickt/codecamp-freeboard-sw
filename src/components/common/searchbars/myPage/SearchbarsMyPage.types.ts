import { ChangeEvent } from 'react'

export interface ISearchbarsBoardListProps {
  refetch: any
  refetchBoardsCount: any
  onChangeKeyword: (value: string) => void
}

export interface ISearchbarsBoardListUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void
}
