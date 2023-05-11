import { gql } from '@apollo/client'

/** createUseditem
 * name : 상품명
 * remarks : 한줄설명
 * contents: 상품설명
 * price: 가격
 * tags : 태그
 */

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($useditemId: ID!, $updateUseditemInput: UpdateUseditemInput!) {
    updateUseditem(useditemId: $useditemId, updateUseditemInput: $updateUseditemInput) {
      _id
    }
  }
`

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`
