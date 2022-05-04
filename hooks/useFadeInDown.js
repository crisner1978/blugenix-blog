import { useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

const useFadeInDown = () => {
  const ctrls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const fadeInDown = {
    hidden: {
      y: -60,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  useEffect(() => {
    if(inView) {
      ctrls.start("visible")
    }
    if(!inView) {
      ctrls.start("hidden")
    }
  }, [ctrls, inView])

  return [ref, ctrls, fadeInDown]
}

export default useFadeInDown