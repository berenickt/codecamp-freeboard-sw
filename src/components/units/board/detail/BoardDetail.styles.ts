import { CompassOutlined, DislikeOutlined, LikeOutlined, PaperClipOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 700px;
`

// **** 메인 콘텐츠
export const MainWrapper = styled.div`
  padding-top: 2rem;
`

// **** 게시판 헤더
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;

  padding-bottom: 1.1rem;
  padding-top: 1rem;
`

// ** 게시판 헤더 - 아바타, 이름, 생성일
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Avatar = styled.img``
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`
export const Writer = styled.div``
export const CreatedAt = styled.div`
  color: #bdbdbd;
`

// ** 게시판 헤더 - 아이콘
export const IconWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`
export const LinkIcon = styled(PaperClipOutlined)`
  font-size: 2rem;
  margin: 0px 10px;
  color: var(--color-red-400);
`
export const LocationIcon = styled(CompassOutlined)`
  font-size: 2rem;
  margin: 0px 10px;
  color: var(--color-yellow-600);
`

// **** 게시판 바디
export const Body = styled.div`
  padding: 0 10px;
`

// ** 게시판 바디 - 제목, 내용
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 0 0.5rem 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gray-400);
  border-top: 1px solid var(--color-gray-400);
  background-color: var(--main-color-5);
`
export const Content = styled.p`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

// ** 게시판 바디 - 유튜브 동영상
export const Youtube = styled(ReactPlayer)`
  margin: auto;
`

// ** 게시판 바디 - 좋아요, 싫어요
export const LikeWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
`
export const LikeIcon = styled(LikeOutlined)`
  font-size: 2rem;
  color: #1758b3;
  margin: 0px 20px;
  cursor: pointer;
`
export const LikeCount = styled.div`
  color: #8ca9d3;
`
export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 2rem;
  color: #d05663;
  margin: 0px 20px;
  cursor: pointer;
`
export const DislikeCount = styled.div`
  color: #d05663;
`

// **** 하단 버튼이동
export const ButtomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`

export const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0px 12px;
  border-radius: 1rem;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 20px;
`
