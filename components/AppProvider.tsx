import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import BlogHeader from './BlogHeader'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>
        <Header />
        {pathname === "/blog" && (
          <BlogHeader />
        )}
        {children}
        <Footer />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default AppProvider
