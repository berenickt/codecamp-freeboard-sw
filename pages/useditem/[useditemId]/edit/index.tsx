import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import { IQuery, IQueryFetchUseditemArgs } from '@/common/types/generated/types'
import { withAuth } from '@/components/common/hocs/withAuth'
import UsedItemWrite from '@/components/units/usedItem/write/UsedItemWrite.container'

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      seller {
        name
      }
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`

function UsedItemEditPage() {
  const router = useRouter()

  const { data } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  })

  return <UsedItemWrite isEdit={true} data={data} />
}

export default withAuth(UsedItemEditPage)
