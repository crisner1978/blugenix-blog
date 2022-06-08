import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeInDown } from 'lib/animationVariants'


// Hook up to GraphCMS and pass info
const Banner = ({ component, formStart, data }) => {
  if(formStart) return null
  if(!data) return null

  return (
    <section className="relative h-[400px] text-white dark:text-gray-100 sm:h-[450px] md:h-[500px] lg:h-[575px]">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={data.heroImage.url}
        className="hero__image"
        placeholder='blur'
        blurDataURL={data.heroImage.url}
        alt="Blugenix Hero"
        priority
      />
      <Image
        src={data.bgGradient1.url}
        layout="fill"
        objectfit="cover"
        lazy="true"
        alt="background gradiant"
      />
      <Image
        src={data.bgGradient2.url}
        layout="fill"
        objectfit="cover"
        lazy="true"
        alt="background gradiant"
      />
      <div className='h-full bg-gradient-to-r from-transparent to-black/50 absolute w-full bottom-0 right-0' />
      <motion.div
        aria-hidden="true"
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className="absolute top-7 sm:top-10 w-full mx-auto text-center capitalize md:top-16 md:text-right lg:top-28"
      >
        <div className='mx-auto max-w-screen-2xl'>
          <header className="ml-auto max-w-3xl px-5 text-2xl sm:px-16 sm:text-4xl md:px-0 md:pr-5 md:text-5xl">
          <h1>{data.slogan}</h1>
          <h2>{data.bannerTitle}</h2>
        </header>
        <header className="mx-auto mt-20 max-w-lg px-2 sm:mt-16 sm:px-10 sm:text-lg md:mx-0 md:ml-auto md:pr-5 md:text-xl">
          {data.about && <h3>{data.about}</h3>}
          {data.info && <h3 className='mt-2'>{data.info}</h3>}
        </header>
        {component ? component : null}
        </div>
        
      </motion.div>
    </section>
  )
}

export default Banner