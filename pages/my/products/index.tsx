import { useAuth } from '@/components/common/hooks/useAuth'
import MyProducts from '@/components/units/my-products/MyProducts.container'

export default function MyProductsPage() {
  useAuth()
  return <MyProducts />
}
