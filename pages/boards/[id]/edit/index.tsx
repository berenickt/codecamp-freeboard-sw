import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import { IQuery, IQueryFetchBoardArgs } from '@/common/types/generated/types'
import BoardWrite from '@/components/units/board/write/BoardWrite.container'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`

export default function BoardEditPage() {
  const router = useRouter()

  // **** 검사를 엄격하게 할려면, 아래와 같이 작성
  // if (typeof router.query.id !== 'string') {
  //   router.push('/');
  //   return <></>;
  // }

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    // **** 널널하게 검사할려면, 아래와 같이 String으로 변환
    variables: { boardId: String(router.query.id) },
  })

  return <BoardWrite isEdit={true} data={data} />
}
