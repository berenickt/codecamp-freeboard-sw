import styled from '@emotion/styled'
import { Rate } from 'antd'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 700px;
  /* border: 1px solid #bdbdbd; */
  margin-top: 1.4rem;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
`

export const PencilIcon = styled.img``
export const Title = styled.div`
  font-size: 1.1rem;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1.4rem;
`

export const Input = styled.input`
  width: 11rem;
  height: 2.5rem;
  padding-left: 1.3rem;
  border: 1px solid lightgray;
  margin-right: 20px;
`

export const Star = styled(Rate)``

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`

export const Contents = styled.textarea`
  width: 100%;
  min-height: 6rem;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContentsLength = styled.div`
  width: 100%;
  height: 3.2rem;
  line-height: 3rem;
  padding-left: 20px;
  color: gray;
`

export const Button = styled.button`
  width: 6.5rem;
  height: 3.2rem;
  border: 1px solid #4caf50;
  background-color: black;
  color: white;
  cursor: pointer;
`
