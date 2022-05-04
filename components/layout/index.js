import Header from './Header'
import Footer from './Footer'
import BlogHeader from './BlogHeader'
import Modal from './Modal'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Layout = ({ children }) => {
  const { pathname } = useRouter()

  return (
    <div className='font-deca'>
      <Head>
        <title>Blugenix Hormone Replacement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {pathname === '/blog' && <BlogHeader />}
      {children}
      <Footer />
      <Modal />
    </div>
  )
}

export default Layout