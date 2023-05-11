import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilValueLoadable } from 'recoil'

import { restoreAccessTokenLoadable } from '@/common/store'

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter()
  const refreshToken = useRecoilValueLoadable(restoreAccessTokenLoadable)

  // **** 3. 로그인 체크(refreshToken 이후) => 좋음, 함수를 공유하므로 _app.tsx에 이어서 총 1번만 요청하게됨
  useEffect(() => {
    void refreshToken.toPromise().then(newAccessToken => {
      if (!newAccessToken) {
        alert('로그인 후 이용 가능합니다.')
        void router.push('/login')
      }
    })
  }, [])

  return <Component {...props} />
}
