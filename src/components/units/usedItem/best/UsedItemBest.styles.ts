import { LikeOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Wrapper = styled.div`
  padding-top: 1rem;
  margin-bottom: 3rem;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 2.5rem;
`

export const BestBoardsWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 2rem;
    width: 70rem;
    margin: 0 auto;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 2rem;
    width: 52rem;
    margin: 0 auto;
  }
`

export const BestBoards = styled.div`
  width: 24rem;
  height: 25.7rem;
  border-radius: 2rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(169, 168, 168, 0.75);
  cursor: pointer;
`

// **** 베스트 게시글 - 이미지
export const ImgWrapper = styled.div`
  text-align: center;
  height: 12rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background-color: var(--color-gray-200);
`

export const BestBoardsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`

// **** 베스트 게시글 - 하단 글
export const TextWrapper = styled.div`
  height: 100%;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 2rem 0 0 2rem;
`

export const BestBoardTitle = styled.h4`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`
export const Info = styled.div``
export const WirterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WriterWrapper = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
`

export const Writer = styled.div`
  margin-left: 1rem;
`

export const BestBoardDate = styled.div`
  margin-top: 0.6rem;
`

// **** 좋아요 버튼
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LikeIcon = styled(LikeOutlined)`
  font-size: 2rem;
  color: #1758b3;
  margin: 0px 20px;
  cursor: pointer;
`
export const LikeCount = styled.div``
