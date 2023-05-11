import { useAuth } from '@/components/common/hooks/useAuth'
import MyPointChargeHistory from '@/components/units/my-point-charge-history/MyPointChargeHistory.container'

export default function MyPointChargeHistoryPage() {
  useAuth()
  return <MyPointChargeHistory />
}
