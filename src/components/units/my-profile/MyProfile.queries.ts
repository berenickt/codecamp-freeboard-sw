import { gql } from '@apollo/client'

// 비밀번호 재설정
export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password) {
      password
    }
  }
`
