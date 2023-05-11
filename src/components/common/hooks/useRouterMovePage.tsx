import { useRouter } from 'next/router'

export const useRouterMovePage = () => {
  const router = useRouter()

  const onClickMovePage = (path: string) => () => {
    void router.push(path)
  }

  const routerMovePage = (path: string) => {
    void router.push(path)
  }
  return { onClickMovePage, routerMovePage }
}
