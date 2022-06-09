import { motion } from 'framer-motion'
import useRightOrLeftAnimation from 'hooks/useRightOrLeftAnimation'
import moment from 'moment'

const TestimonialCard = ({ createdAt, image, message, name, index }) => {
  const [setRefs, ctrls, fadeLeftToRight, fadeRightToLeft] =
    useRightOrLeftAnimation()

  console.log('index', index)
  return (
    <motion.div
      initial="hidden"
      ref={setRefs}
      aria-hidden="true"
      animate={ctrls}
      variants={index % 2 === 0 ? fadeRightToLeft : fadeLeftToRight}
      className={`${
        index % 2 === 0
          ? 'items-center md:flex'
          : 'flex-row-reverse items-center md:flex'
      } gap-12`}
    >
      {/* Image */}
      <div className="rounded-3xl md:max-w-sm">
        <img
          className="rounded-3xl shadow-lg"
          src={image}
          alt={`${name} image`}
        />
      </div>
      {/* Name and Message */}
      <div className="mt-4 space-y-4 md:mt-0">
        <p className="text-gray-700 dark:text-gray-300 sm:text-lg">{message}</p>
        <div className="flex items-center">
          <p className="inline-block w-full font-medium uppercase tracking-wide text-gray-500 dark:text-gray-300 sm:text-lg">
            {name}
          </p>
          <span className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 sm:text-base">
            {createdAt ? moment(createdAt).format('MMM DD, YYYY') : null}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
