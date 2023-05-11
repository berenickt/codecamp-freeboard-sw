import { FacebookFilled, InstagramOutlined, YoutubeFilled } from '@ant-design/icons'
import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Footer = styled.footer`
  width: 100%;
  height: 20rem;
  background-color: var(--main-color-green);
`

export const Container = styled.div`
  width: 100rem;
  padding-top: 2rem;
  margin: 0 auto;

  @media ${breakPoints.tablet} {
    width: 70rem;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
  }
`

export const Title = styled.div`
  font-size: 2.5rem;
  color: var(--color-gray-700);
  font-weight: bold;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  border-bottom: 1px solid var(--color-gray-600);
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const FacebookLogo = styled(FacebookFilled)`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  font-size: 1.7rem;
  color: var(--color-white);
  background-color: var(--color-gray-600);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InstagramLogo = styled(InstagramOutlined)`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  font-size: 1.7rem;
  color: var(--color-white);
  background-color: var(--color-gray-600);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const YotubeLogo = styled(YoutubeFilled)`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  font-size: 1.7rem;
  color: var(--color-white);
  background-color: var(--color-gray-600);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BottomNotice = styled.div`
  font-size: 1.5rem;
  color: var(--color-gray-600);
  padding: 3rem 0;
  font-weight: bold;
`
