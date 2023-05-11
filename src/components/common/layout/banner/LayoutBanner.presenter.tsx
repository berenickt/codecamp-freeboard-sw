import * as S from './LayoutBanner.styles'

const settings = {
  dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지
  infinite: true, // loop를 만들지
  slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
  slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
  speed: 1000, // 넘어가는 속도
  autoplay: true,
  autoplaySpeed: 6500,
  cssEase: 'ease',
}

export default function LayoutBannerUI() {
  return (
    <S.Container>
      <S.SlickSlider {...settings}>
        <S.Image src="/images/layout/banner/banner01.png" />
        <S.Image src="/images/layout/banner/banner02.png" />
        <S.Image src="/images/layout/banner/banner03.png" />
        <S.Image src="/images/layout/banner/banner04.png" />
      </S.SlickSlider>
    </S.Container>
  )
}
