import { gql } from '@apollo/client'

// 마이찜
export const FETCH_USED_ITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      price
      images
      seller {
        name
      }
      createdAt
    }
  }
`

// 마이찜 Count
export const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`
