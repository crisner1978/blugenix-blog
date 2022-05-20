import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInDown } from 'lib/animationVariants'


// Hook up to GraphCMS and pass info
const Banner = ({ component }) => {
  return (
    <section className="relative h-[400px] text-white dark:text-gray-100 sm:h-[450px] md:h-[500px] lg:h-[575px]">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651693992/my-upload/mdtxgdknkx3f00msnj1c.jpg"
        className="hero__image"
        placeholder='blur'
        blurDataURL='https://res.cloudinary.com/dtram9qiy/image/upload/v1651693992/my-upload/mdtxgdknkx3f00msnj1c.jpg'
        alt="Blugenix Hero"
        priority
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819429/malamutes/heros/cellgradianttop.png"
        layout="fill"
        objectfit="cover"
        lazy="true"
        alt="background gradiant"
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819418/malamutes/heros/cellgradiantbottom.png"
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
        <header className="ml-auto max-w-3xl px-5 text-2xl sm:px-16 sm:text-4xl md:px-0 md:pr-5 md:text-5xl">
          <h1>The Best in Anit-Aging Therapy</h1>
          <h2>Blugenix Medical Forms</h2>
        </header>
        <header className="mx-auto mt-20 max-w-lg px-2 sm:mt-16 sm:px-10 sm:text-lg md:mx-0 md:ml-auto md:pr-5 md:text-xl">
          <h3>Be as thorough as possible when completing your medical history forms.</h3>
          <h3 className='mt-2'>Your forms and lab results will help our doctor create a roadmap for your therapy.</h3>
        </header>
        {component && component}
      </motion.div>
    </section>
  )
}

export default Banner