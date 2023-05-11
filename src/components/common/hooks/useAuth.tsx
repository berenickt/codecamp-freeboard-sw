import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// prettier - ignore
export function useAuth() {
  const router = useRouter()

  // **** 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      Modal.error({ content: '로그인이 필요합니다' })
      void router.push('/login')
    }
  }, [])
}
