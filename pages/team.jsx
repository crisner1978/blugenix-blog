import BlogHeader from 'components/layout/BlogHeader'
import VideoHero from 'components/VideoHero'
import Head from 'next/head'
import React, { useRef } from 'react'

const TeamPage = () => {
  const teamRef = useRef(null)
  const handleClick = () => {
    teamRef.current.scrollIntoView({ behavior: 'smooth' })
    
  }

  return (
    <div className='min-h-screen'>
      <Head>
        <title>Blugenix Team Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Hero image */}
      <VideoHero />
      {/* Page Header w/Team Members */}
      <BlogHeader title="Team" team={true} ref={teamRef} handleClick={handleClick} />
      
    </div>
  )
}

export default TeamPage

