import { ChangeEvent } from 'react'

import { IQuery } from '@/common/types/generated/types'

export interface IBoardWriteProps {
  isEdit: boolean
  // Pick 타입 : IQuery에서 fetchBoard 속성만
  data?: Pick<IQuery, 'fetchBoard'>
}

export interface IRegisterBtnProps {
  isActive: boolean
}

export interface IUpdateBoardInput {
  title?: string
  contents?: string
  youtubeUrl?: string
  boardAddress?: {
    zipcode?: string
    address?: string
    addressDetail?: string
  }
  images?: string[]
}

export interface IBoardWriteUIProps {
  isActive: boolean
  idValidation: string
  passwordValidation: string
  postTitleValidation: string
  postContnetValidation: string
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePostTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePostContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onToggleAddressModal: () => void
  onCompleteAddressSearch: (data: any) => void
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeFileUrls: (fileUrls: string, index: number) => void
  onClickSignup: () => void
  onClickUpdate: () => void
  isEdit: boolean
  data?: Pick<IQuery, 'fetchBoard'>
  isOpen: boolean
  zipcode: string
  address: string
  addressDetail: string
  fileUrls: string[]
}
