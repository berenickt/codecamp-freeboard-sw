import { v4 as uuidv4 } from 'uuid'

import * as S from './UsedItemWrite.styles'
import { IUsedItemWriteUIPros } from './UsedItemWrite.types'
import KakaoMapPage from '@/components/common/kakaoMap'
import { Modal } from 'antd'
import DaumPostcode from 'react-daum-postcode'
import { useMoveToPage } from '@/components/common/hooks/useMoveToPage'
import UploadFilePage from '@/components/common/uploads/02'

export default function UsedItemWriteUI(props: IUsedItemWriteUIPros) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <>
      {/* 모달창 */}
      {props.isOpen && (
        <Modal visible={true} onOk={props.handleOk} onCancel={props.handleCancel}>
          <DaumPostcode onComplete={props.handleComplete} />
        </Modal>
      )}
      <S.ProductForm
        onSubmit={
          props.isEdit //
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickSubmit)
        }>
        <S.Title>{props.isEdit ? '상품 수정' : '상품 등록'}</S.Title>

        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.BasicInput
            type="text"
            {...props.register('name')}
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.name}
          />
          <S.ErrorMessage>{props.formState.errors.name?.message}</S.ErrorMessage>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>한줄요약</S.Label>
          <S.BasicInput
            type="text"
            placeholder="한줄요약을 작성해주세요."
            {...props.register('remarks')}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <S.ErrorMessage>{props.formState.errors.remarks?.message}</S.ErrorMessage>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          {/* Web-Editor */}
          <S.StyledReactQuill
            placeholder="상품을 설명해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchUseditem?.contents}
          />
          <S.ErrorMessage>{props.formState.errors.contents?.message}</S.ErrorMessage>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>가격</S.Label>
          <S.BasicInput
            type="number"
            placeholder="판매가격을 작성해주세요."
            {...props.register('price')}
            defaultValue={props.data?.fetchUseditem.price}
          />
          <S.ErrorMessage>{props.formState.errors.price?.message}</S.ErrorMessage>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>태그입력</S.Label>
          <S.TagInput type="text" onKeyUp={props.onKeyUpHash} placeholder="#spacebar를 눌러 입력하세요" />
          <S.HashTagWrapper>
            {props.hashArr.map((element: string, index: number) => (
              <S.HashTag key={`${index}_${element}}`} onClick={props.onClickTagDelete}>
                {element}
              </S.HashTag>
            ))}
          </S.HashTagWrapper>
        </S.InputWrapper>

        {/* 지도 관련 */}
        <S.ProductZipcodeWrapper>
          <S.KaKaoMapWrapper>
            <S.Label>거래 위치</S.Label>
            <S.MapWrapper>
              {/* 카카오맵 */}
              <KakaoMapPage address={props.address} data={props.data} isEdit={props.isEdit} />
            </S.MapWrapper>
          </S.KaKaoMapWrapper>
          <S.ZipcodeWrapper>
            <S.GPSWrapper>
              <S.Label>GPS</S.Label>
              <S.GPXFlex>
                <S.Zipcode
                  readOnly
                  id="zipcode"
                  value={props.zipcode || props.data?.fetchUseditem.useditemAddress?.zipcode || ''}
                  type="text"
                  placeholder="07250"
                />
                <S.ZipcodeBtn onClick={props.showModal}>우편번호 검색</S.ZipcodeBtn>
              </S.GPXFlex>
            </S.GPSWrapper>
            <S.ZipWrapper>
              <S.Label>주소</S.Label>
              {/* 지도실제 주소 나오는 곳 */}
              <S.AddressInput
                readOnly
                // 만약에 address가 비어있다면, 뒤에꺼 보여주기
                value={props.address || (props.data?.fetchUseditem.useditemAddress?.address ?? '')}
              />
              {/* 지도상세 주소 나오는 곳 */}
              <S.AddressInput
                onChange={props.onChangeAddressDetail}
                defaultValue={props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ''}
              />
            </S.ZipWrapper>
          </S.ZipcodeWrapper>
        </S.ProductZipcodeWrapper>

        <S.InputWrapper>
          <S.Label>사진첨부</S.Label>
        </S.InputWrapper>
        <S.ImageWrapper>
          {/* (사진첨부2) Uploads01라는 컴포넌트를 배열(fileUrls)의 길이 수 만큼 그리기 */}
          {props.images?.map((element, index) => (
            <UploadFilePage key={uuidv4()} index={index} fileUrl={element} onChangeFileUrls={props.onChangeFileUrls} />
          ))}
        </S.ImageWrapper>

        <S.ButtonWrapper>
          <S.CancelBtn onClick={onClickMoveToPage('/useditem')}>취소하기</S.CancelBtn>
          <S.RegisterBtn>{props.isEdit ? '수정하기' : '등록하기'}</S.RegisterBtn>
          {/* <S.SubmitButton isActive={props.formState.isValid}>{props.isEdit ? '수정하기' : '등록하기'}</S.SubmitButton> */}
        </S.ButtonWrapper>
      </S.ProductForm>
    </>
  )
}
