import { useRouter } from 'next/router'
import { Tooltip } from 'antd'

import * as S from './BoardDetail.styles'
import { IBoardDetailUIProps } from './BoardDetail.types'
import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'
import { getDate } from '@/common/libraries/utils'

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const router = useRouter()
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address}, ${props.data?.fetchBoard.boardAddress?.addressDetail}`}>
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          {/* 사진 업로드, element이 빈 값이 아닌 경우에만 이미지가 그려지도록 filter 조건 설정  */}
          <S.ImageWrapper>
            {props.data?.fetchBoard.images
              ?.filter((element: string) => element)
              .map((element: string) => (
                <S.Image key={element} src={`https://storage.googleapis.com/${element}`} />
              ))}
          </S.ImageWrapper>
          <S.Content>{props.data?.fetchBoard?.contents}</S.Content>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube url={props.data?.fetchBoard.youtubeUrl} width="39rem" height="21rem" controls={true} />
          )}
          <S.LikeWrapper>
            <S.IconWrapper onClick={props.onClickLike}>
              <S.LikeIcon />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.IconWrapper>
            <S.IconWrapper onClick={props.onClickDislike}>
              <S.DislikeIcon />
              <S.DislikeCount>{props.data?.fetchBoard.dislikeCount}</S.DislikeCount>
            </S.IconWrapper>
          </S.LikeWrapper>
        </S.Body>
      </S.MainWrapper>
      <S.ButtomWrapper>
        <S.Button onClick={onClickMoveToPage(`/boards/${router.query.id}/edit`)}>수정하기</S.Button>
        <S.Button onClick={onClickMoveToPage('/boards')}>목록으로</S.Button>
        <S.Button id={props.data?.fetchBoard?._id} onClick={props.onClickDeleteBtn}>
          삭제하기
        </S.Button>
      </S.ButtomWrapper>
    </S.Wrapper>
  )
}
