import InfiniteScroll from 'react-infinite-scroller'

import * as S from './UsedItemList.styles'
import { IUsedItemListUIProps } from './UsedItemList.types'

import UsedItemBestList from '../best/UsedItemBest.container'
import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'
import SearchDate from '@/components/common/searchbars/Date/SearchDate.container'
import { getCreateDate, getNumberComma, sliceUsedItemTitle } from '@/common/libraries/utils'
import { IUseditem } from '@/common/types/generated/types'

export default function UsedItemListUI(props: IUsedItemListUIProps) {
  const { onClickMoveToPage } = useMoveToPage()
  const fetchUSedItems = props.data?.fetchUseditems
  // console.log('========= 중고상품 리스트 =================')
  // console.log(fetchUSedItems)

  return (
    <S.Wrapper>
      <UsedItemBestList />
      <S.SearchWrapper>
        {/* <SearchbarsBoardList
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        /> */}
        <SearchDate />
      </S.SearchWrapper>
      <S.ProductsListWrapper>
        <S.InfiniteScrollWrapper>
          <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={false}>
            <S.GridContainer>
              {fetchUSedItems?.map((element: IUseditem, index) => (
                <S.GridItem key={`${element._id}-${index}`} onClick={onClickMoveToPage(`/useditem/${element._id}`)}>
                  <S.ImgWrapper onClick={props.onClickResentUsedItem(element)}>
                    <S.ProductImg
                      src={
                        element?.images?.[0] ?? element?.images?.[1]
                          ? `https://storage.googleapis.com/${element.images[0] ?? element.images[1]}`
                          : '/images/no-image.png'
                      }
                    />
                  </S.ImgWrapper>
                  <S.ProductWrapper>
                    <S.ProductName>{sliceUsedItemTitle(element?.name)}</S.ProductName>
                    <S.ProductDetailWrapper>
                      <S.ProductPrice>{getNumberComma(Number(element?.price))}원</S.ProductPrice>
                      <S.ProductDate>{getCreateDate(element?.createdAt)}</S.ProductDate>
                    </S.ProductDetailWrapper>
                  </S.ProductWrapper>
                </S.GridItem>
              ))}
            </S.GridContainer>
          </InfiniteScroll>
        </S.InfiniteScrollWrapper>
      </S.ProductsListWrapper>
    </S.Wrapper>
  )
}
