import { useAuth } from '@/components/common/hooks/useAuth'
import MyProductsPurchaed from '@/components/units/my-products-purchased/MyProductsPurchased.container'

export default function MyProductsPurchaedPage() {
  useAuth()
  return <MyProductsPurchaed />
}
