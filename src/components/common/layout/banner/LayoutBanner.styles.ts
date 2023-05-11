import styled from '@emotion/styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.2);
`

export const SlickSlider = styled(Slider)`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 400px;

  // 이전 버튼
  .slick-prev {
    z-index: 1;
    left: 20%;

    &::before {
      font-size: 48px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  // 다음 버튼
  .slick-next {
    z-index: 1;
    right: 20%;

    &::before {
      font-size: 48px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .slick-dots {
    bottom: 19px;

    li button:before {
      color: #fff;
      font-size: 18px;
    }
  }
`

export const Image = styled.img`
  height: 400px;
  object-fit: cover;
`
