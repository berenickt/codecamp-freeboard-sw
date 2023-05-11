import { useAuth } from '@/components/common/hooks/useAuth'
import MyPointSellHistory from '@/components/units/my-point-sell-history/MyPointSellHistory.container'

export default function MyPointSellHistoryPage() {
  useAuth()
  return <MyPointSellHistory />
}
