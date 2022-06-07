import useRightOrLeftAnimation from 'hooks/useRightOrLeftAnimation'
import { motion } from 'framer-motion'
import { fadeRightToLeft } from 'lib/animationVariants'

const TestimonialCard = ({ date, image, info, name, index }) => {
  const [setRefs, ctrls, fadeLeftToRight] = useRightOrLeftAnimation()
  console.log('index', index)
  return (
    // {`${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} py-12 items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10`}
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
      } gap-12 px-5`}
    >
      {/* Image */}
      <div className="rounded-3xl md:max-w-sm">
        <img className="rounded-3xl shadow-lg" src={image} alt="" />
      </div>
      {/* Name and Message */}
      <div className="mt-4 space-y-4">
        <p className="text-gray-700 dark:text-gray-300 sm:text-lg">{info}</p>
        <p className="inline-block w-full font-medium uppercase tracking-wide text-gray-500 dark:text-gray-300 sm:text-lg">
          {name}
          <span>{date ? `Date: ${date}` : null}</span>
        </p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
