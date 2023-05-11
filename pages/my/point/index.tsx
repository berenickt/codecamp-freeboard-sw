import { useAuth } from '@/components/common/hooks/useAuth'
import MyPoint from '@/components/units/my-point/MyPoint.container'

export default function MyPointPage() {
  useAuth()
  return <MyPoint />
}
