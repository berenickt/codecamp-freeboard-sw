import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'
import { Global } from '@emotion/react'

import ApolloSetting from '@/components/common/apollo'
import { GlobalStyle } from '@/common/styles/global'
import Layout from '@/components/common/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={GlobalStyle} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  )
}
