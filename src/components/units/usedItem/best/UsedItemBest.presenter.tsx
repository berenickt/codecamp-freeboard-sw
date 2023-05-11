import * as S from './UsedItemBest.styles'
import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'
import { IUsedItemBestListUIProps } from './UsedItemBest.types'
import { getDate, sliceUsedItemTitle } from '@/common/libraries/utils'

export default function UsedItemBestListUI(props: IUsedItemBestListUIProps) {
  const { onClickMoveToPage } = useMoveToPage()
  // console.log('======= 베스트 게시글 데이터 ========')
  // console.log(props.data?.fetchUseditemsOfTheBest)

  return (
    <S.Wrapper>
      <S.Title>BEST</S.Title>
      <S.BestBoardsWrapper>
        {props.data?.fetchUseditemsOfTheBest?.map(bestUsedItem => (
          <S.BestBoards key={bestUsedItem._id} onClick={onClickMoveToPage(`/useditem/${bestUsedItem._id}`)}>
            <S.ImgWrapper onClick={props.onClickResentUsedItem(bestUsedItem)}>
              {bestUsedItem.images && (
                <S.BestBoardsImg src={`https://storage.googleapis.com/${bestUsedItem.images[0]}`} alt="NO-IMAGE" />
              )}
            </S.ImgWrapper>
            <S.TextWrapper>
              <S.BestBoardTitle>{sliceUsedItemTitle(bestUsedItem.name)}</S.BestBoardTitle>
              <S.WirterWrapper>
                <S.Info>
                  <S.WriterWrapper>
                    <S.Avatar src="/images/avatar.png" />
                    <S.Writer>{bestUsedItem?.seller?.name}</S.Writer>
                  </S.WriterWrapper>
                  <S.BestBoardDate>{getDate(bestUsedItem.createdAt)}</S.BestBoardDate>
                </S.Info>
                <S.LikeWrapper>
                  <S.LikeIcon />
                  <S.LikeCount>{bestUsedItem.pickedCount}</S.LikeCount>
                </S.LikeWrapper>
              </S.WirterWrapper>
            </S.TextWrapper>
          </S.BestBoards>
        ))}
      </S.BestBoardsWrapper>
    </S.Wrapper>
  )
}
