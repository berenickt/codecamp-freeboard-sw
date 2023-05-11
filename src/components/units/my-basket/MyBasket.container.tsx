import { useMutation, useQuery } from '@apollo/client'
import { MouseEvent, useEffect, useState } from 'react'

import { CREATE_POINT_TO_BUYING, FETCH_USER_LOGGED_IN } from './MyBasket.queries'
import MyBasketUI from './MyBasket.presenter'

export default function MyBasket() {
  // **** 상태
  const [basketItems, setBasketItems] = useState([])

  // **** PlayGround
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN)
  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TO_BUYING)

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket') ?? '[]')
    setBasketItems(basket)
  }, [])

  // **** 결제 요청
  const onClickPay = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: (event.target as HTMLButtonElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      })
    } catch (error: any) {}
  }

  return <MyBasketUI loginData={loginData} basketItems={basketItems} onClickPay={onClickPay} />
}
