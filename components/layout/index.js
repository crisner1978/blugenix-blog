import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BlogHeader from './BlogHeader'
import Modal from '../Modal'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const { pathname } = useRouter()

  return (
    <div className='font-deca'>
    <Header />
        {pathname === '/blog' && <BlogHeader />}
    {children}
    <Footer />
    <Modal />
    </div>
  )
}

export default Layout