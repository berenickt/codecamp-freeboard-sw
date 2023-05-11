import { breakPoints } from '@/common/styles/media'
import styled from '@emotion/styled'

// **** 충전 모달창
export const ModalWrapper = styled.div`
  padding: 2rem;
`

export const ModalTitle = styled.div`
  font-weight: 900;
  font-size: 1.9rem;
  margin: 3rem 0;
  text-align: center;
`

//
export const PointPickSelectBtn = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  padding: 0 2rem;
  border-bottom: 2px solid var(--color-black);
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: var(--color-black);
`

// ** 충전 모달창 - 포인트 선택
export const PointWrapperUl = styled.ul`
  width: 100%;
  border: 1px solid var(--color-gray-500);
  border-radius: 1rem;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 1rem;
  color: var(--color-gray-500);
  box-shadow: 2px 2px 2px 2px var(--color-gray-300);
`

export const PointLi = styled.li`
  width: 100%;
  height: 52px;
  padding-left: 20px;
  padding-top: 15px;
  border-bottom: 1px solid var(--color-gray-500);

  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    font-weight: 700;
    color: #000;
  }
`

interface IChargeBtnProps {
  isActive: boolean
}

export const ChargeBtn = styled.button`
  width: 100%;
  padding: 1rem 1.1rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  color: var(--color-white);

  background-color: ${(props: IChargeBtnProps) => (props.isActive ? 'var(--color-black)' : 'var(--color-gray-600)')};
`

// ---------------------------------

export const Header = styled.header`
  width: 100%;
  height: 6.5rem;
  /* background-color: var(--main-color); */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-600);
`

export const Container = styled.div`
  width: 100rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    width: 70rem;
    justify-content: space-between;
  }

  @media ${breakPoints.mobile} {
    width: 50rem;
    justify-content: space-between;
  }
`

// **** 헤더 왼쪽
export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const LogoImg = styled.img`
  width: 2.6rem;
`
export const Logotext = styled.h1`
  color: var(--main-color);
  font-family: 'Happiness-Title';
  font-weight: 900;
`

// **** 헤더 오른쪽
export const Profile = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const LoginMenu = styled.div`
  display: flex;
  align-items: center;
`

export const DragDownMenu = styled.p`
  position: relative; // 자기 자신의 현재 위치를 기준으로
  cursor: pointer;
`

export const DropDownMenuTrueWrapper = styled.div`
  position: absolute; // 부모 위치를 기준으로 상대적으로
  top: 3rem;
  right: 0;
  z-index: 99;
  width: 25rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background-color: var(--color-white);

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background-color: red; */
    padding: 1rem 2rem;
    border-bottom: 2px solid #000;

    img {
      width: 4rem;
      height: 4rem;
    }
  }
`

export const DropDownMenuProfileWrapper = styled.div`
  font-weight: bold;
  margin-left: 2rem;
  p {
    font-size: 1.5rem;
  }
`

export const DropDownInnerMenu = styled.ul`
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    width: 100%;
    padding-left: 2rem;
    border-bottom: 1px solid var(--color-gray-600);
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: var(--main-color);
    }

    svg {
      font-size: 20px;
      margin-right: 15px;
      cursor: pointer;
    }
  }
  li:last-child {
    border-bottom: none;
  }
`

//
export const Avatar = styled.img`
  width: 2.8rem;
`

export const ProfileWrapper = styled.div``

export const InnerButton = styled.span`
  margin: 10px;
  color: var(--color-black);
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: var(--main-color);
  }
`

// 장바구니
export const CartWrapper = styled.div`
  font-size: 2.8rem;
  margin-left: 1rem;
  position: relative;
  cursor: pointer;
  &:hover {
    color: var(--color-main);
  }
`
export const pickNum = styled.span`
  position: absolute;
  top: 3px;
  right: -4px;
  padding: 3px 7px;
  background: #faad14de;
  border-radius: 50%;
  font-weight: 700;
  color: #fff;
  font-size: 12px;
`
