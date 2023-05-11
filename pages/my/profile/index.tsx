import { useAuth } from '@/components/common/hooks/useAuth'
import MyProfile from '@/components/units/my-profile/MyProfile.container'

export default function MyProfilesPage() {
  useAuth()
  return <MyProfile />
}
