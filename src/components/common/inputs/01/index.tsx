import styled from '@emotion/styled'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface IProps {
  type: 'text' | 'password'
  register?: UseFormRegisterReturn
  placeholder?: string
}

const Input = styled.input`
  width: 100%;
  height: 4.4rem;
  padding-left: 1rem;
  border: 1px solid var(--color-gray-300);
`

export default function Input01(props: IProps) {
  return <Input type={props.type} {...props.register} />
}
