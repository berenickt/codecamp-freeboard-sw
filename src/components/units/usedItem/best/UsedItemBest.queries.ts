import { gql } from '@apollo/client'

export const FETCH_USEDITEM_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      pickedCount
      seller {
        name
      }
      createdAt
      images
    }
  }
`
