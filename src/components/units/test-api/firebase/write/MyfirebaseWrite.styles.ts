import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  border: 1px solid #bdbdbd;
  margin-top: 1rem;
  padding: 0 2rem;
`

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
`

export const Label = styled.div`
  font-size: 0.6rem;
  padding-bottom: 0.4rem;
`

export const Writer = styled.input`
  width: 100%;
  height: 2.4rem;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
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
  width: 14rem;
  height: 2.7rem;
  margin: 0px 12px;
  border: 1px solid #569558;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  color: black;

  :hover {
    background-color: #8bc88d;
    border-color: white;
  }
`
