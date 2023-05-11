import { v4 as uuidv4 } from 'uuid'

import * as S from './BoardWrite.styles'
import Uploads01 from '@/components/common/uploads/01/Uploads01.container'
import { IBoardWriteUIProps } from './BoardWrite.types'

/** uuid Docs
 * https://www.npmjs.com/package/uuid
 */

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  // console.log('=====게시판 작성, 수정 받아온 UI 데이터=======');
  // console.log(props.data);

  return (
    <>
      {/* 모달창 */}
      {props.isOpen && (
        <S.AddressModal open={true} onOk={props.onToggleAddressModal} onCancel={props.onToggleAddressModal}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? '게시글 수정' : '게시글 등록'}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.BasicInput
              type="text"
              id="ID"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeEmail}
              defaultValue={props.data?.fetchBoard.writer ?? ''}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.ErrorMessage>{props.idValidation}</S.ErrorMessage>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.BasicInput type="password" placeholder="비밀번호를 작성해주세요." onChange={props.onChangePassword} />
            <S.ErrorMessage>{props.passwordValidation}</S.ErrorMessage>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.BasicInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangePostTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.ErrorMessage>{props.postTitleValidation}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.PostContent
            placeholder="내용을 작성해주세요."
            onChange={props.onChangePostContent}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.ErrorMessage>{props.postContnetValidation}</S.ErrorMessage>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipCodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              // 만약에 zipcode가 비어있다면, 뒤에꺼 보여주기
              value={props.zipcode || (props.data?.fetchBoard.boardAddress?.zipcode ?? '')}
            />
            <S.ZipcodeBtn onClick={props.onToggleAddressModal}>우편번호 검색</S.ZipcodeBtn>
          </S.ZipCodeWrapper>
          <S.Address
            readOnly
            // 만약에 address가 비어있다면, 뒤에꺼 보여주기
            value={props.address || (props.data?.fetchBoard.boardAddress?.address ?? '')}
          />
          <S.Address
            onChange={props.onChangeAddressDetail}
            // 상세 주소를 보여주기 위해 defaultValue
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail ?? ''}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="유튜브 링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ''}
          />
        </S.InputWrapper>
        <S.OptionWrapper>
          <S.Label>메인설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.OptionWrapper>

        <S.InputWrapper>
          <S.Label>사진첨부</S.Label>
        </S.InputWrapper>
        <S.ImageWrapper>
          {/* (사진첨부2) Uploads01라는 컴포넌트를 배열(fileUrls)의 길이 수 만큼 그리기 */}
          {props.fileUrls.map((element, index) => (
            <Uploads01 key={uuidv4()} index={index} fileUrl={element} onChangeFileUrls={props.onChangeFileUrls} />
          ))}
        </S.ImageWrapper>

        <S.ButtonWrapper>
          {/* <S.Cancel onClick={onClickMoveToPage('/main')}>취소하기</S.Cancel> */}
          <S.RegisterBtn onClick={props.isEdit ? props.onClickUpdate : props.onClickSignup}>
            {props.isEdit ? '수정하기' : '등록하기'}
          </S.RegisterBtn>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  )
}
