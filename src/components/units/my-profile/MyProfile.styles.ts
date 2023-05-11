import styled from '@emotion/styled'

export const FlexWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  height: auto;
`

export const Section = styled.div`
  width: 80rem;
  margin-left: 8rem;
`

export const Title = styled.div`
  margin-top: 5rem;
  font-weight: bold;
  font-size: 2rem;
`

export const FlexBox = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  width: 65rem;
  padding: 1rem 1.5rem;
  height: 3.7rem;
  border: 1px solid var(--color-gray-400);

  font-weight: 400;
  font-size: 16px;

  ::placeholder {
    color: #bdbdbd;
    font-weight: 400;
    font-size: 16px;
  }
`
export const ClickBt = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BottomRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.6rem;
  background: var(--main-color);
  color: var(--color-white);
`

export const Error = styled.div`
  text-align: center;
  font-size: 1rem;
  color: ${props => props.color};
`
