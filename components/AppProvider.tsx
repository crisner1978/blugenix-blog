import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import Layout from '../components/layout'

interface Props {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider attribute="class">
        <RecoilRoot>
          <Layout>{children}</Layout>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default AppProvider
