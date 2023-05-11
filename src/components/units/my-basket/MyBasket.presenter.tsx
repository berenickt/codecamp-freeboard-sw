import { IUseditem } from '@/common/types/generated/types'
import * as S from './MyBasket.styles'

export default function MyBasketUI(props: any) {
  return (
    <S.Wrapper>
      <S.BasketTitle>{props.loginData?.fetchUserLoggedIn.name} 님의 장바구니</S.BasketTitle>
      <S.BasketPoint>
        <span>{props.loginData?.fetchUserLoggedIn.name}님의 포인트</span> :
        <span> {props.loginData?.fetchUserLoggedIn.userPoint.amount}POINTS</span>
      </S.BasketPoint>
      <S.BorderTop />
      <S.BasketItems>
        {props.basketItems.map((el: IUseditem) => (
          <S.Row key={el._id}>
            <input type="checkbox" style={{ width: 80, height: 20 }} />
            <S.Column>판매상품 : {el.name}</S.Column>
            <S.Column>한줄 요약 : {el.remarks}</S.Column>
            <S.Column>가격 : {el.price}P</S.Column>
            <button onClick={props.onClickPay} id={el._id}>
              결제하기
            </button>
          </S.Row>
        ))}
      </S.BasketItems>
    </S.Wrapper>
  )
}
