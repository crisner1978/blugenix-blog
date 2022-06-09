import { motion } from 'framer-motion'
import useRightOrLeftAnimation from 'hooks/useRightOrLeftAnimation'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getTestimonialCards } from 'services/queries'
import FreeButton from './FreeButton'
import TestimonialCard from './TestimonialCard'

const Testimonials = ({ data }) => {
  const [setRefs, ctrls, fadeLeftToRight] = useRightOrLeftAnimation()
  const router = useRouter()

  // getTestimonialCards
  const { data: testimonials, isSuccess } = useQuery('testimonialCards', () =>
    getTestimonialCards()
  )

  return (
    <section className="mx-auto mt-10 max-w-6xl px-10">
      <motion.div
        initial="hidden"
        ref={setRefs}
        aria-hidden="true"
        animate={ctrls}
        variants={fadeLeftToRight}
        className="mb-10 flex flex-col-reverse justify-center md:mb-2 md:flex-row md:gap-12 md:pb-10"
      >
        <div>
          <header>
            <h1 className="inline-block w-full font-medium uppercase tracking-wide text-gray-500 dark:text-gray-300 xl:text-lg">
              {data?.heading}
            </h1>
          </header>
          <h2 className="mt-[10px] inline-flex font-fancy text-2xl font-medium leading-normal md:leading-normal lg:text-3xl lg:leading-snug xl:text-4xl xl:leading-snug">
            {data?.subheading}
          </h2>
          <div className="text-gray-700 dark:text-gray-300 sm:text-lg">
            <p className="mt-8">{data?.text}</p>
            <p className="mt-8">{data?.text2}</p>
            <FreeButton
              text={data?.buttonText}
              tw="text-center md:text-left text-white dark:text-gray-200 mt-8"
              onClick={() => router.push('/drop-testimonial')}
            />
          </div>
        </div>
        <div className="relative mb-12 flex items-center justify-center rounded-3xl md:mb-0 md:max-w-md">
          <img
            className="rounded-3xl shadow-lg"
            src={data?.sectionImage.url}
            alt={data?.slug}
          />
        </div>
      </motion.div>

      {/* Get and Put Data from and into GraphCMS */}
      <div className="grid grid-cols-1 gap-y-12 ">
        {isSuccess &&
          testimonials?.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              index={index}
              name={testimonial.name}
              createdAt={testimonial.createdAt}
              message={testimonial.message}
              image={testimonial.image.url}
            />
          ))}
      </div>
    </section>
  )
}

export default Testimonials
