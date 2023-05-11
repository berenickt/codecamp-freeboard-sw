import * as S from './SearchbarsMyPage.styles'
import { ISearchbarsBoardListUIProps } from './SearchbarsMyPage.types'

export default function SearchbarsMyPageUI(props: ISearchbarsBoardListUIProps) {
  return (
    <S.SearchBarWrapper>
      <S.SearchTitleWrapper>
        <S.TitleInput placeholder="제목을 검색해주세요." onChange={props.onChangeSearchbar} />
        <S.SearchOutlinedIcon />
      </S.SearchTitleWrapper>
    </S.SearchBarWrapper>
  )
}
