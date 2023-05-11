import { gql } from '@apollo/client'

export const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn {
			email
			name
			userPoint {
				amount
			}
		}
	}
`

export const LOGOUT_USER = gql`
	mutation {
		logoutUser
	}
`

export const CREATE_POINT_LOADING = gql`
	mutation createPointTransactionOfLoading($impUid: ID!) {
		createPointTransactionOfLoading(impUid: $impUid) {
			impUid
			amount
		}
	}
`
