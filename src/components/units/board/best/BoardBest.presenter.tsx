import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'
import * as S from './BoardBest.styles'
import { IBoardBestListUI } from './BoardBest.types'
import { getDate, sliceUsedItemTitle } from '@/common/libraries/utils'

export default function BoardBestListUI(props: IBoardBestListUI) {
  const { onClickMoveToPage } = useMoveToPage()
  // console.log('======= 베스트 게시글 데이터 ========')
  // console.log(props.data?.fetchBoardsOfTheBest)

  return (
    <S.Wrapper>
      <S.Title>BEST</S.Title>

      <S.BestBoardsWrapper>
        {props.data?.fetchBoardsOfTheBest.map(bestBoard => (
          <S.BestBoards key={bestBoard._id} onClick={onClickMoveToPage(`/boards/${bestBoard._id}`)}>
            <S.ImgWrapper>
              {bestBoard.images && (
                <S.BestBoardsImg src={`https://storage.googleapis.com/${bestBoard.images[0]}`} alt="NO-IMAGE" />
              )}
            </S.ImgWrapper>
            <S.TextWrapper>
              <S.BestBoardTitle>{sliceUsedItemTitle(bestBoard.title)}</S.BestBoardTitle>
              <S.WirterWrapper>
                <S.Info>
                  <S.WriterWrapper>
                    <S.Avatar src="/images/avatar.png" />
                    <S.Writer>{bestBoard.writer}</S.Writer>
                  </S.WriterWrapper>
                  <S.BestBoardDate>Date: {getDate(bestBoard.createdAt)}</S.BestBoardDate>
                </S.Info>
                <S.LikeWrapper>
                  <S.LikeIcon />
                  <S.LikeCount>{bestBoard.likeCount}</S.LikeCount>
                </S.LikeWrapper>
              </S.WirterWrapper>
            </S.TextWrapper>
          </S.BestBoards>
        ))}
      </S.BestBoardsWrapper>
    </S.Wrapper>
  )
}
