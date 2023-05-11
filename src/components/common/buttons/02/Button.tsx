import { ButtonHTMLAttributes, forwardRef } from 'react'
import styled from '@emotion/styled'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'blue' | 'black'
  label?: string
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { variant = 'default', size = 'md', color = 'blue', label, disabled, fullWidth, ...restProps } = props
  return (
    <ButtonElement variant={variant} size={size} color={color} ref={ref} {...restProps}>
      {label}
    </ButtonElement>
  )
})

const ButtonElement = styled.button<IButtonProps>`
  ${props =>
    props.size === 'md' &&
    `
      height: 36px;
      padding: 0 14px;
      font-size: 1.4rem;
      border-radius: 6px;
    `};

  ${props =>
    props.variant === 'default' &&
    props.color === 'blue' &&
    !props.disabled &&
    `
      color: #fff;
      background-color: #478dff;
      &:hover {
        background: #2B7CFE;
      }
      &:active {
        background: #1B64DA;
      }
    `};

  font-weight: 500;
  transition: 100ms ease-out;
`
export default Button
