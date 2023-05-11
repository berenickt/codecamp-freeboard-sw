import { IQuery } from '@/common/types/generated/types'
import { ChangeEvent } from 'react'

export interface IUsedItemWriteProps {
  data?: Pick<IQuery, 'fetchUseditem'>
  isEdit: boolean
  loading?: any
}

export interface IFormValues {
  name?: string
  remarks?: string
  contents?: string
  price?: number
}

export interface IUsedItemWriteUIPros {
  isEdit: boolean
  onClickUpdate: (data: any) => void
  onClickSubmit: (data: any) => Promise<void>
  onChangeFileUrls: (fileUrl: string, index: number) => void
  onChangeContents: (value: any) => void
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
  data?: any
  images?: string[]
  register: any
  handleSubmit: any
  formState: any
  getValues: any
  onKeyUpHash: (event: any) => void
  onClickTagDelete: (event: any) => void
  hashArr: string[]
  showModal: () => void
  handleOk: () => void
  handleCancel: () => void
  handleComplete: any
  isOpen: boolean
  zipcode: any
  address: string
  addressDetail: string
}
