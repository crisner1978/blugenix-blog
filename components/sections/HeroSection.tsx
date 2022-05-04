import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { IHero } from 'typings'

interface Props {
  children: ReactNode
  hero: IHero
}

const fadeInDown = {
  initial: {
    y: -60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, 
      ease: "easeOut"
    }
  }
}

// const variants = {
//   hidden: { opacity: 0, x: -150, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// }

const HeroSection = ({ hero, children }: Props) => {
  return (
    <section className="relative h-[400px] text-white dark:text-gray-100 sm:h-[450px] md:h-[500px] lg:h-[575px] xl:h-[650px]">
      <img
        src={hero.heroImage.url}
        className="hero__image"
        alt="Blugenix Hero"
      />
      <img
        src={hero.bgGradient1.url}
        className="hero__image"
        alt="background gradiant"
      />
      <img
        src={hero.bgGradient2.url}
        className="hero__image"
        alt="background gradiant"
      />
      <motion.div
        variants={fadeInDown}
        initial="initial"
        animate="animate"
        className="absolute top-5 w-full text-center capitalize md:top-10 md:text-right lg:top-20 xl:top-32"
      >
        <header className="ml-auto max-w-3xl px-5 text-2xl sm:px-16 sm:text-4xl md:px-0 md:pr-5 md:text-5xl lg:text-5xl xl:text-5xl">
          {hero.slogan}
        </header>
        <header className="mx-auto mt-20 max-w-lg px-2 sm:mt-16 sm:px-10 sm:text-lg md:mx-0 md:ml-auto md:pr-5 md:text-xl">
          {hero.about}
        </header>
        <header className="mx-auto mt-2 max-w-lg px-2 sm:mt-4 sm:px-10 sm:text-lg md:mx-0 md:ml-auto md:px-0 md:pr-5 md:text-xl">
          {hero.info}
        </header>
        {children}
      </motion.div>
    </section>
  )
}

export default HeroSection
