import styled from '@emotion/styled'

interface IMyButtonProps {
  isValid: boolean
}

const MyButton = styled.button`
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
  background-color: ${(props: IMyButtonProps) => (props.isValid ? 'yellow' : '')};
`

export default function Button01(props: any) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  )
}
