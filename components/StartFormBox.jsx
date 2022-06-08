import { motion } from 'framer-motion'
import useRightOrLeftAnimation from 'hooks/useRightOrLeftAnimation'
import { useRouter } from 'next/router'


const StartFormBox = ({ formStart, handleStartForm, title, button, route }) => {
  const [setRefs, ctrls, fadeLeftToRight] = useRightOrLeftAnimation()
  const router = useRouter()
  return (
    <motion.section
      initial="hidden"
      ref={setRefs}
      aria-hidden="true"
      animate={ctrls}
      variants={fadeLeftToRight}
      className={`mx-auto mt-8 grid max-w-6xl grid-cols-1 px-3 sm:px-10 lg:grid-cols-3 lg:gap-12 ${
        !formStart && '!max-w-3xl !grid-cols-1'
      }`}
    >
      <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg dark:bg-stone-800">
        <h3 className="text-center text-lg sm:text-xl md:text-2xl">{title}</h3>
        <div className="mt-8 flex justify-center">
          <button className="page__btn text-white" onClick={handleStartForm ? handleStartForm : () => router.push(route) }>
            {button}
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default StartFormBox
