import { IQuery } from '@/common/types/generated/types'

export interface ILayoutHeaderProps {
  loginData?: Pick<IQuery, 'fetchUserLoggedIn'>
  onClickLogout: () => void
  onClickPayment: () => void
  showPoint: () => void
  onClickMyPage: () => void
  onClickShowModal: () => void
  onClickPoint: (event: any) => void
  isLoginDropdown: boolean
  isOpen: boolean
  isShowPoint: boolean
  isActive: boolean
  amount: number
}
