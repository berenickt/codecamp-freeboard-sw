import * as S from './OpenapiList.styles'
import { IOpenapiListUIProps } from './OpenapiList.types'

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  // console.log('========Dog OPEN-API에서 받아온 데이터========');
  // console.log(props.imgURLs);

  return (
    <S.GridContainer>
      {props.imgURLs.map(element => (
        <S.GridItemDogImg key={element} src={element} alt="로딩중" />
      ))}
    </S.GridContainer>
  )
}
