import * as S from './SearchbarsBoardList.styles'
import { ISearchbarsBoardListUIProps } from './SearchbarsBoardList.types'

export default function SearchbarsBoardListUI(props: ISearchbarsBoardListUIProps) {
  return (
    <S.SearchBarWrapper>
      <S.SearchTitleWrapper>
        <S.TitleInput placeholder="제목을 검색해주세요." onChange={props.onChangeSearchbar} />
        <S.SearchOutlinedIcon />
      </S.SearchTitleWrapper>
    </S.SearchBarWrapper>
  )
}
