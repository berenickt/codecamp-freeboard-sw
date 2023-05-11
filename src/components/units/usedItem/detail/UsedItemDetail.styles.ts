import { breakPoints } from '@/common/styles/media'
import { CloseOutlined, EditOutlined, HeartFilled } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Image } from 'antd'
import Slider from 'react-slick'

export const ProductDetailWrapper = styled.section`
  height: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
`

// **** 상품 상세 - 상단
export const TopWrapper = styled.section`
  width: 100rem;
  display: flex;
  margin-top: 2rem;
  margin: 0 auto;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

export const CarouselWrapper = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
`

// **** 사진
export const ImageWrapper = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  /* border: 1px solid var(--color-gray-500); */

  /* background-color: blue; */
  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70rem;
    height: 50rem;
    margin: 0 auto;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50rem;
    height: 50rem;
    margin: 0 auto;
  }
`

export const ImageSlider = styled(Slider)`
  width: 100%;
  height: 290px;
  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
    li {
      margin: 5px;
    }
  }
  .slick-prev {
    z-index: 1;
    left: 15px;
  }
  .slick-prev::before {
    content: '<';
    color: #f2f2f2;
    font-size: 40px;
  }
  .slick-next {
    z-index: 1;
    right: 15px;
  }
  .slick-next::before {
    content: '>';
    color: #f2f2f2;
    font-size: 40px;
  }
`

export const CarouselImage = styled(Image)`
  width: 320px;
  height: 320px;
`

export const ProductImg = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: cover;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 50rem;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 50rem;
  }
`

// **** 상품 설명
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40rem;
  margin-left: 3rem;

  @media ${breakPoints.tablet} {
    margin-left: 0rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    margin-left: 0rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`
export const ProductNameWrapper = styled.div`
  width: 100%;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gray-500);
  margin: 0 auto;

  @media ${breakPoints.tablet} {
    width: 70rem;
  }

  @media ${breakPoints.mobile} {
    margin-top: 1rem;
    width: 50rem;
  }
`
export const ProductName = styled.h2`
  width: 90%;
  font-size: 2.2rem;
  font-weight: bold;
`

export const EditBtn = styled(EditOutlined)`
  font-size: 2rem;
  padding-right: 10px;
  cursor: pointer;
`

export const DeleteBtn = styled(CloseOutlined)`
  font-size: 2rem;
  cursor: pointer;
`

export const ProductPrice = styled.div`
  font-size: 3rem;
  padding-bottom: 0.6rem;
  font-weight: bold;
  border-bottom: 2px solid var(--color-black);

  @media ${breakPoints.tablet} {
    width: 70rem;
    margin: 0 auto;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
    margin: 0 auto;
  }
`
export const ProductRemark = styled.div`
  padding: 2rem 0 0 1rem;
  height: 18rem;
  font-size: 1.3rem;

  @media ${breakPoints.tablet} {
    width: 70rem;
    margin: 0 auto;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
    margin: 0 auto;
  }
`

// **** 해시태그
export const HashTagWrapper = styled.div`
  padding: 2rem 0;

  @media ${breakPoints.tablet} {
    margin: 0 auto;
  }

  @media ${breakPoints.mobile} {
    margin: 0 auto;
  }
`

export const HashTag = styled.span`
  display: inline-block;
  padding: 1rem 1.5rem;
  margin-right: 1rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 1rem;
  background: #ffe004;
`

// **** 상품 설명 - 이동버튼
export const DetailMoveBtnWrapper = styled.div`
  display: flex;
  gap: 2.2rem;
  border-top: 1px solid var(--color-gray-600);
  padding-top: 2rem;

  @media ${breakPoints.tablet} {
    width: 100%;
    justify-content: center;
    border: 0;
  }

  @media ${breakPoints.mobile} {
    justify-content: center;
    margin: 0 auto;
    border: 0;
  }
`

export const HeartIcon = styled(HeartFilled)`
  padding: 0 0.5rem;
`

export const ProductPickButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  height: 8rem;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--color-red-300) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`
export const ProductBasketButton = styled.button`
  width: 23rem;
  height: 8rem;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--color-gray-800) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`
export const ProductBuyButton = styled.button`
  width: 23rem;
  height: 8rem;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`

// **** 상품 상세 - 하단
export const BottomWrapper = styled.section`
  width: 100rem;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media ${breakPoints.tablet} {
    width: 70rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`

export const ProductContents = styled.div`
  width: 70rem;
  height: auto;
  border-right: 1px solid var(--color-gray-600);
  margin-top: 2rem;
  padding-right: 2rem;

  @media ${breakPoints.tablet} {
    width: 70rem;
    border-right: 0px;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
    border-right: 0px;
  }
`

export const ProductBottomTitle = styled.div`
  font-size: 2rem;
  padding-bottom: 1rem;
  /* margin-right: 2rem; */
  border-bottom: 3px solid var(--color-black);
`

// **** 상품 내용
export const ProductBottomContents = styled.div`
  min-height: 25rem;
  font-size: 1rem;
  padding: 2rem 0 2rem 2rem;
  margin-bottom: 2rem;

  @media ${breakPoints.tablet} {
    width: 70rem;
    padding: 2rem 2rem 2rem 2rem;
    margin: 0 auto;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
    padding: 2rem 2rem 2rem 2rem;
    margin: 0 auto;
  }
`

export const ProductSellerWrapper = styled.div`
  font-size: 2rem;
  width: 35rem;
  padding: 2rem 0;
  margin-left: 2rem;

  @media ${breakPoints.tablet} {
    width: 70rem;
    margin: 0 auto;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
    margin: 0 auto;
  }
`

export const ProductSeller = styled.div`
  font-size: 2rem;
  width: 35rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--color-black);
  margin-bottom: 4rem;
`

// **** 지도
export const MapWrapper = styled.div`
  width: 100%;
  height: 30rem;
`

export const MapLabel = styled.div`
  font-size: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-gray-500);
`
