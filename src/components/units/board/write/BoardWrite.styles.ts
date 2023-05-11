import styled from '@emotion/styled'
import { Modal } from 'antd'
import DaumPostcode from 'react-daum-postcode'

export const Wrapper = styled.div`
  width: 70rem;
  height: 90rem;
  padding: 0 2rem;
  /* border: 1px solid var(--color-gray-300); */
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
`

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: 50px;
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

export const ErrorMessage = styled.div`
  margin: 0.5rem 0;
  color: red;
`
// ** Input 세트

export const PostContent = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 10px;
  border: 1px solid var(--color-gray-300);
`

// **** 주소
export const ZipCodeWrapper = styled.div`
  display: flex;
  gap: 1.3rem;
`

export const Zipcode = styled.input`
  width: 6rem;
  height: 4.4rem;
  padding-left: 1rem;
`

export const ZipcodeBtn = styled.button`
  height: 4.4rem;
  padding: 1rem 1.5rem;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`

export const Address = styled.input`
  width: 100%;
  height: 4.4rem;
  margin-top: 16px;
  padding-left: 1rem;
  border: 1px solid var(--color-gray-300);
`

// **** 유튜브
export const Youtube = styled.input`
  width: 100%;
  height: 4.4rem;
  padding-left: 1rem;
  border: 1px solid var(--color-gray-300);
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

// **** 사진첨부
export const ImageWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  /* padding-top: 40px; */
`

// **** 등록버튼
export const ButtonWrapper = styled.div`
  height: 4.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

// **** 모달, 주소창
export const AddressModal = styled(Modal)``

export const AddressSearchInput = styled(DaumPostcode)``
