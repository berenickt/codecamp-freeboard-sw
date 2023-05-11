import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'

const Button = styled.button`
  background-color: #2277d8;
  color: #ffffff;
  width: 100px;
  height: 40px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  text-align: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 30px;
    font-size: 0.8rem;
  }
`
export default function Button03(props: any) {
  return <Button onClick={props.onClick}>{props.title}</Button>
}
