import { SearchOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

export const SearchBarWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`

// **** 게시판 제목 검색
export const SearchTitleWrapper = styled.div`
  width: 55rem;
  height: 4.5rem;
  border-radius: 0.3rem;
  position: relative;
`

export const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  border-radius: 0.7rem;
  background-color: var(--color-gray-200);
  padding-left: 4rem;
`

export const SearchOutlinedIcon = styled(SearchOutlined)`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  color: var(--color-back);
  font-size: 1.5rem;
  cursor: pointer;
`
