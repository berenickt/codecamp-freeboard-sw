import styled from '@emotion/styled'
import { SettingFilled, ShoppingFilled, ThunderboltFilled } from '@ant-design/icons'

// **** 사이드바 사용자 정보
export const SideLoginInfo = styled.aside`
  width: 16rem;
  min-height: 100rem;
  margin-bottom: 100px;
  /* background-color: var(--main-color); */
  border-right: 1px solid var(--color-gray-600);
  padding: 2rem;
  text-align: center;
`

// ** 사이드바 사용자 정보 - 상단
export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 3rem;
`

export const Avatar = styled.img``

export const UserName = styled.h4`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`

export const UserPoint = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`

// ** 사이드바 사용자 정보 - 하단
export const UserMenuWrapper = styled.div`
  margin-top: 3rem;
`

export const UserMenu = styled.button`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  font-size: 1.9rem;
  color: var(--color-gray-700);

  &:hover {
    color: var(--color-black);
  }
`
export const PointIcon = styled(ThunderboltFilled)`
  font-size: 2rem;
  margin: 0 1rem;
  &:hover {
    color: var(--color-yellow-500);
  }
`

export const EditPasswordIcon = styled(SettingFilled)`
  font-size: 2rem;
  margin: 0 1rem;
  &:hover {
    color: var(--color-yellow-500);
  }
`

export const CartIcon = styled(ShoppingFilled)`
  font-size: 2rem;
  margin: 0 1rem;
  &:hover {
    color: var(--color-yellow-500);
  }
`
