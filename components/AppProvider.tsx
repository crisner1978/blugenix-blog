import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import Layout from '../components/layout'
import { ReactQueryDevtools } from "react-query/devtools"
import { QueryClient, QueryClientProvider } from "react-query";

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
