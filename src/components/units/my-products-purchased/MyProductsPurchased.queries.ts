import { gql } from '@apollo/client'

// 내가 판매중인 상품
export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      remarks
      price
      pickedCount
      createdAt
    }
  }
`
// 내가 판매중인 상품 Count
export const FETCH_USED_ITEMS_COUNT_I_BOUGHT = gql`
  query {
    fetchUseditemsCountIBought
  }
`
