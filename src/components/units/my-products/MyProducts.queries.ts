import { gql } from '@apollo/client'

// 내가 판매중인 상품
export const FETCHUSED_ITEMS_ISOLD = gql`
  query fetchUseditemsISold($page: Int, $search: String) {
    fetchUseditemsISold(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      price
      tags
      buyer {
        name
      }
      createdAt
    }
  }
`
// 내가 판매중인 상품 Count
export const FETCH_USED_ITEMS_COUNT_ISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`
