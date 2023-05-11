import { useAuth } from '@/components/common/hooks/useAuth'
import MyPointBuyHistory from '@/components/units/my-point-buy-history/MyPointBuyHistory.container'

export default function MyPointBuyHistoryPage() {
  useAuth()
  return <MyPointBuyHistory />
}
