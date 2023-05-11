import DOMPurify from 'dompurify'

import * as S from './UsedItemDetail.styles'
import { IUsedItemDetailUIProps } from './UsedItemDetail.types'
import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'
import { getNumberComma } from '@/common/libraries/utils'
import UsedItemQuestionWrite from '../../usedItem-question/write/UsedItemQuestionWrite.container'
import UsedItemQuestionList from '../../usedItem-question/list/UsedItemQuestionList.container'
import KakaoMapPage from '@/components/common/kakaoMap'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function UsedItemDetailUI(props: IUsedItemDetailUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.ProductDetailWrapper>
      <S.TopWrapper>
        <S.ImageWrapper>
          <S.CarouselWrapper>
            <S.ImageSlider {...settings}>
              {props.data?.fetchUseditem?.images?.map((src: any, index: number) => (
                <S.CarouselImage
                  onError={(event: any) => {
                    if (event.target instanceof Element) event.target.src = '/images/no-image.png'
                  }}
                  key={index}
                  src={`https://storage.googleapis.com/${src}`}
                />
              ))}
            </S.ImageSlider>
          </S.CarouselWrapper>
        </S.ImageWrapper>
        <S.DetailWrapper>
          <S.ProductNameWrapper>
            <S.ProductName>{props.data?.fetchUseditem?.name}</S.ProductName>
            <div>
              <S.EditBtn onClick={onClickMoveToPage(`/useditem/${String(props.data?.fetchUseditem?._id)}/edit`)} />
              <S.DeleteBtn onClick={props.onClickDelete} />
            </div>
          </S.ProductNameWrapper>
          <S.ProductPrice>{getNumberComma(Number(props.data?.fetchUseditem?.price))} 원</S.ProductPrice>
          <S.ProductRemark>{props.data?.fetchUseditem?.remarks}</S.ProductRemark>
          <S.HashTagWrapper>
            {props.data?.fetchUseditem?.tags?.map((element: any, idx: any) => (
              <>
                <S.HashTag key={`${idx}-${element}`}>{element}</S.HashTag>
              </>
            ))}
          </S.HashTagWrapper>
          <S.DetailMoveBtnWrapper>
            <S.ProductPickButton onClick={props.onClickPick}>
              <S.HeartIcon />찜 {props.data?.fetchUseditem?.pickedCount}
            </S.ProductPickButton>
            <S.ProductBasketButton onClick={props.onClickBasket}>장바구니</S.ProductBasketButton>
            <S.ProductBuyButton onClick={props.onClickPay}>바로구매</S.ProductBuyButton>
          </S.DetailMoveBtnWrapper>
        </S.DetailWrapper>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.ProductContents>
          <S.ProductBottomTitle>상품정보</S.ProductBottomTitle>
          {/* process.browser */}
          {typeof window !== 'undefined' && (
            <S.ProductBottomContents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(props.data?.fetchUseditem?.contents)),
              }}
            />
          )}
          <S.MapWrapper>
            <S.MapLabel>거래지역</S.MapLabel>
            <KakaoMapPage isEdit={false} data={props.data} />
          </S.MapWrapper>
        </S.ProductContents>
        <S.ProductSellerWrapper>
          <S.ProductBottomTitle>상점 정보</S.ProductBottomTitle>
          <S.ProductSeller>{props.data?.fetchUseditem.seller?.name}</S.ProductSeller>
          <S.ProductBottomTitle>댓글</S.ProductBottomTitle>
          <UsedItemQuestionWrite />
          <UsedItemQuestionList />
        </S.ProductSellerWrapper>
      </S.BottomWrapper>
    </S.ProductDetailWrapper>
  )
}
