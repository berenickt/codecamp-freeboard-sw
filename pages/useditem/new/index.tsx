import { withAuth } from '@/components/common/hocs/withAuth'
import UsedItemWrite from '@/components/units/usedItem/write/UsedItemWrite.container'

function UsedItemWritePage() {
  return <UsedItemWrite isEdit={false} />
}

export default withAuth(UsedItemWritePage)
