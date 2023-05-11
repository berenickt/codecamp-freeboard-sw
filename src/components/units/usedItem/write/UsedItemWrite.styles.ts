import styled from '@emotion/styled'
import { Modal } from 'antd'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

import DaumPostcode from 'react-daum-postcode'

const ReactQuill = dynamic(async () => await import('react-quill'), {
  ssr: false,
})

export const InputError = styled.div`
  color: red;
  font-size: 11px;
`

export const ErrorMessage = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`

export const ProductForm = styled.form`
  width: 70rem;
  height: auto;
  padding: 0 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-black);
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
`

// **** Input 세트
export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`

export const Label = styled.div`
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
`

export const BasicInput = styled.input`
  width: 100%;
  height: 4.4rem;
  padding-left: 1rem;
  border: 1px solid var(--color-gray-300);
`

export const StyledReactQuill = styled(ReactQuill)`
  width: 100%;
  height: 14.4rem;
  background-color: var(--color-white);
  margin-bottom: 6rem;
`

// **** 태그
export const HashTagWrapper = styled.div`
  margin: 2rem 0;
`
export const HashTag = styled.span`
  background-color: yellowgreen;
  padding: 0.5rem;
  border-radius: 1rem;
  margin-right: 1rem;
`

export const TagInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-gray-300);
`

// **** 카카오 Map, 주소
export const ProductZipcodeWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`

export const KaKaoMapWrapper = styled.div`
  width: 100%;
`

export const MapWrapper = styled.div`
  width: 35rem;
  height: 30rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`

export const ZipcodeWrapper = styled.div``
export const GPSWrapper = styled.div`
  margin-bottom: 2rem;
  /* display: flex; */
`
export const ZipWrapper = styled.div``

export const Zipcode = styled.input`
  width: 6rem;
  height: 4.4rem;
  padding-left: 1rem;
  margin-right: 1rem;
  border: 1px solid var(--color-gray-300);
`

export const GPXFlex = styled.div`
  display: flex;
`

export const ZipcodeBtn = styled.button`
  width: 16rem;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`

export const AddressInput = styled.input`
  width: 100%;
  height: 4.4rem;
  margin-top: 16px;
  padding-left: 1rem;
  border: 1px solid var(--color-gray-300);
`

// **** 이미지 업로드
export const ImageWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`

export const ImageInput = styled.input``

export const ImagePopUp = styled.div`
  width: 500px;
  height: 500px;
`

// **** 메인 ratio 설정
export const OptionWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`

export const RadioButton = styled.input`
  margin-top: 0.5rem;
  cursor: pointer;
`

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`

// **** 등록버튼
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4.8rem;
  margin-top: 1rem;
`

export const RegisterBtn = styled.button`
  width: 25rem;
  margin: 0.4rem;
  padding: 1rem 1.5rem;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`

export const CancelBtn = styled.button`
  width: 25rem;
  margin: 0.4rem;
  padding: 1rem 1.5rem;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--color-gray-600) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;

  &&:hover {
    filter: opacity(0.7);
  }
`

interface IPropsIsActive {
  isActive: boolean
}

export const SubmitButton = styled.button`
  background-color: ${(props: IPropsIsActive) => (props.isActive ? '#fdf5ec' : '#8C775E')};
  color: ${(props: IPropsIsActive) => (props.isActive ? '#8C775E' : '#fdf5ec')};
  width: 30%;
  height: 10vh;
  text-align: center;
  border-radius: 16px;
  border: none;
`

// **** 모달, 주소창
export const AddressModal = styled(Modal)``
export const AddressSearchInput = styled(DaumPostcode)``
