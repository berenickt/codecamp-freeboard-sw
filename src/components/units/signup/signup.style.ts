import styled from '@emotion/styled'

// **** 로그인 메뉴
export const SignUpSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: var(--color-black);
`

export const Wrapper = styled.div`
	width: 50rem;
	height: 70rem;
	margin: 1rem auto;
	padding: 5rem;
	background-color: rgba(255, 255, 255, 0.8);
`

// 로그인 타이틀
export const LoginTitle = styled.h4`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	gap: 1rem;
	font-size: 3rem;
	font-weight: bold;
	border-bottom: 1px solid var(--color-gray-500);
	padding-bottom: 1rem;
	margin-bottom: 4rem;
`

export const LoginSubTitle = styled.p`
	font-size: 2.1rem;
	/* font-weight: bold; */
`

// **** 회원가입 입력
export const InputWrapper = styled.div`
	/* background-color: Yellowgreen; */
	width: 100%;
	margin-top: 1rem;
`

export const Label = styled.div`
	font-size: 1rem;
`

export const BasicInput = styled.input`
	width: 100%;
	height: 4.4rem;
	padding: 3rem 0 3rem 1rem;
	border: 1px solid var(--color-gray-300);
	border-radius: 1rem;
	margin: 0.4rem 0;
`

export const ErrorMessage = styled.div`
	margin: 0.5rem 0;
	color: red;
`

// **** 회원가입 버튼
export const ButtonWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 2rem;
`

export const CancelBtn = styled.button`
	width: 100%;
	height: 5rem;
	margin: 0.4rem 0;
	padding: 1rem 1.5rem;
	color: var(--color-white);
	box-shadow: 0 0 40px 40px var(--color-black) inset, 0 0 0 0 var(--color-black);
	transition: all 150ms ease-in-out;

	&:hover {
		background-color: var(--color-red-500);
		box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
	}
`

export const SignUpBtn = styled.button`
	width: 100%;
	height: 5rem;
	margin: 0.4rem 0;
	padding: 1rem 1.5rem;
	color: var(--color-white);
	box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);
	transition: all 150ms ease-in-out;

	&:hover {
		background-color: var(--color-red-500);
		box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
	}
`

export const SignupWrapper = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
`

export const SignupPageMoveSpan = styled.span`
	font-weight: bold;
	margin-left: 1rem;
	border-bottom: 2px solid var(--color-black);
	cursor: pointer;
`
