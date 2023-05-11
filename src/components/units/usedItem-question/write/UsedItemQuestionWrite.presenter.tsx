import * as S from './UsedItemQuestionWrite.styles'
import { IUsedItemQuestionWriteUIProps } from './UsedItemQuestionWrite.types'

export default function UsedItemQuestionWriteUI(props: IUsedItemQuestionWriteUIProps) {
  return (
    <S.CommentQuentionWrapper>
      <S.Contents
        maxLength={100}
        onChange={props.onChangeContents}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        // 만약에 props.contents가 비어있다면, 뒤에꺼 보여주기
        value={props.contents || (props.element?.contents ?? '')}
      />
      <S.BottomWrapper>
        <S.ContentsLength>
          {(props.contents ? props.contents.length : props.element?.contents.length) ?? 0}/100
        </S.ContentsLength>
        <S.Button onClick={props.isEdit ? props.onClickUpdateQuestion : props.onClickCreateQuestion}>
          {props.isEdit ? '수정하기' : '문의하기'}
        </S.Button>
      </S.BottomWrapper>
    </S.CommentQuentionWrapper>
  )
}
