import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode } from 'react'
import { IHero } from 'typings'
import { fadeInDown } from '../../lib/animationVariants'

interface Props {
  children: ReactNode
  hero: IHero
}

const HeroSection = ({ hero, children }: Props) => {
  if(!hero) return null
  
  return (
    <section className="relative h-[400px] text-white dark:text-gray-100 sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[725px] 2xl:h-[950px]">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={hero.heroImage.url}
        className="hero__image"
        placeholder="blur"
        blurDataURL={hero.heroImage.url}
        alt="Blugenix Hero"
        priority
      />
      <img
        src={hero.bgGradient1.url}
        className="hero__center"
        alt="background gradiant"
        loading="lazy"
      />
      <img
        src={hero.bgGradient2.url}
        className="hero__center"
        alt="background gradiant"
        loading="lazy"
      />
      <motion.div
        aria-hidden="true"
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className="absolute top-5 mx-auto w-full text-center md:top-10 md:text-right lg:top-20 xl:top-32 2xl:top-52"
      >
        <div className='mx-auto max-w-screen-2xl'>
          <header className="ml-auto max-w-3xl px-5 text-2xl sm:px-16 sm:text-4xl md:px-0 md:pr-5 md:text-5xl">
            <h1>{hero.slogan}</h1>
            {hero.bannerTitle && <h2>{hero.bannerTitle}</h2>}
          </header>
          <header className="mx-auto mt-20 max-w-lg px-2 sm:mt-16 sm:px-10 sm:text-lg md:mx-0 md:ml-auto md:pr-5 md:text-xl">
            {hero.about}
          </header>
          <header className="mx-auto mt-2 max-w-lg px-2 sm:mt-4 sm:px-10 sm:text-lg md:mx-0 md:ml-auto md:px-0 md:pr-5 md:text-xl">
            {hero.info}
          </header>
          {children}
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
