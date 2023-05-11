import { useQuery } from '@apollo/client'

import UsedItemAnswerListUI from './UsedItemAnswerList.presenter'
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from '../write/UsedItemAnswerWrite.queries'

export default function UsedItemAnswerList(props: any) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.element?._id,
    },
  })

  // console.log('=====상품 전체 질문 리스트 ===')
  // console.log(data)

  return <UsedItemAnswerListUI data={data} element={props.element} />
}
