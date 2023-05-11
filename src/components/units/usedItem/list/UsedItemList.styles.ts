import { DollarCircleFilled, HeartFilled } from '@ant-design/icons'
import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

export const Wrapper = styled.div`
  width: 100rem;
`

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ProductsListWrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 2rem;
`

export const InfiniteScrollWrapper = styled.div`
  overflow: auto;
  display: flex;
  justify-content: center;
`

// -------------------------------
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(17.5rem, 17.5rem)); /* 5열, 자동채움행 */
  grid-template-rows: repeat(auto-fill, minmax(25%, auto));
  gap: 2rem;
  row-gap: 3rem;
  height: 80rem;
  /* border: 1px solid red; */

  @media ${breakPoints.tablet} {
    grid-template-columns: repeat(4, minmax(16.2rem, 16.2rem));
  }

  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(3, minmax(16.2rem, 16.2rem));
  }
`

export const GridItem = styled.div`
  text-align: center;
  border: 1px solid var(--color-black);
  cursor: pointer;
  height: 21rem;

  &:hover {
    border: 1px solid var(--main-color);
  }
`
// -------------------------------
// **** 상품 이미지
export const ImgWrapper = styled.div`
  width: 17.5rem;
  height: 14rem;
`
export const ProductImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media ${breakPoints.tablet} {
    width: 16.2rem;
  }

  @media ${breakPoints.mobile} {
    width: 16.2rem;
  }
`

// -------------------------------
// **** 상품 내용
export const ProductWrapper = styled.div`
  border-top: 1px solid var(--color-gray-500);
`

export const ProductName = styled.div`
  /* display: flex; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.7rem 0 0.7rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`

export const ProductDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem;
`
export const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
`
export const ProductDate = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-gray-600);
`

// **** 상품 내용
export const ExplanationWrapper = styled.div`
  width: 44rem;
  padding: 1rem 1rem;
  margin-top: 1rem;
`

export const Contents = styled.div`
  padding-top: 0.5rem;
  font-size: 1rem;
`

export const Tag = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: var(--color-gray-500);
`

export const SellerWrapper = styled.div`
  display: flex;
  background-color: var(--color-red-100);
  margin-top: 3rem;
`

export const Seller = styled.div``

export const LikeBtn = styled.div`
  margin-left: 2.5rem;
`

// **** 상품 가격
export const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
  font-size: 1.7rem;
  width: 15rem;
  height: 16rem;
`

// **** 상품목록 하단 버튼
export const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const MoneyIcon = styled(DollarCircleFilled)`
  font-size: 2rem;
  margin: 0 1rem;
  color: var(--color-yellow-500);
`

export const HeartIcon = styled(HeartFilled)`
  font-size: 1.5rem;
  color: var(--color-red-500);
  margin: 0px 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--color-red-600);
  }
`

export interface ITextTokenProps {
  isMatched: boolean
}

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? 'red' : 'black')};
`
