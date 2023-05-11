import { DatePicker, Space } from 'antd'

import * as S from './SearchDate.styles'

const { RangePicker } = DatePicker

export default function SearchDateUI(props: any) {
  return (
    <S.SearchDateWrapper>
      <Space direction="vertical" size={12}>
        <RangePicker />
      </Space>
      <S.SearchDateBtn>검색</S.SearchDateBtn>
    </S.SearchDateWrapper>
  )
}
