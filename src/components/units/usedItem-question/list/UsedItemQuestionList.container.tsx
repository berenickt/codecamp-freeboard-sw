import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import UsedItemQuestionListUI from './UsedItemQuestionList.presenter'
import { FETCH_USED_ITEM_QUESTIONS } from './UsedItemQuestionList.queries'

export default function UsedItemQuestionList() {
  const router = useRouter()

  // **** PlayGorund
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  })

  // console.log('=====상품 전체 질문 리스트 ===')
  // console.log(data)

  return <UsedItemQuestionListUI data={data} />
}
