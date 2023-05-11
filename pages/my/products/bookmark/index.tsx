import { useAuth } from '@/components/common/hooks/useAuth'
import MyProductsBookmark from '@/components/units/my-products-bookmark/MyProductsBookmark.container'

export default function MyProductsBookmarkPage() {
  useAuth()
  return <MyProductsBookmark />
}
