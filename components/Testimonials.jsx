import useToRightAnimation from 'hooks/useToRightAnimation'
import { motion } from 'framer-motion'
import FreeButton from './FreeButton'
import { useRouter } from 'next/router'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const [setRefs, ctrls, fadeLeftToRight] = useToRightAnimation()
  const router = useRouter()

  return (
    <>
      <motion.section
        initial="hidden"
        ref={setRefs}
        aria-hidden="true"
        animate={ctrls}
        variants={fadeLeftToRight}
        className="mx-auto mt-8 mb-12 md:mb-4 flex max-w-6xl flex-col-reverse px-10 pt-2 md:flex-row md:gap-12 md:pb-12"
      >
        <div>
          <header>
            <h1 className="inline-block w-full font-medium uppercase tracking-wide text-gray-500 dark:text-gray-300 xl:text-lg">
              Testimonials
            </h1>
          </header>
          <h2 className="mt-[10px] inline-flex font-fancy text-2xl font-medium leading-normal md:leading-normal lg:text-3xl lg:leading-snug xl:text-4xl xl:leading-snug">
            Powerful Therapies. Extraordinary Results.
          </h2>
          <div className="text-gray-700 dark:text-gray-300 sm:text-lg">
            <p className="mt-8">
              Real people achieving incredible results utilizing Blugenix's
              Hormone Replacement Therapy. Find out what our clients are saying
              below.
            </p>
            <p className="mt-8">
              If you're a client of Blugenix and are on Hormone Replacement
              Therapy, we want to hear from you.
            </p>
            <FreeButton
              text="Tell us your story"
              tw="text-center md:text-left text-white dark:text-gray-200 mt-8"
              onClick={() => router.push('/drop-testimonial')}
            />
          </div>
        </div>
        <div className="relative mb-12 flex items-center justify-center rounded-3xl md:mb-0 md:max-w-md">
          <img
            className="rounded-3xl shadow-lg"
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1654534732/my-upload/f36im3t3jxj4nu3oqmae.jpg"
            alt
          />
        </div>
      </motion.section>
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-10 gap-y-12 pb-8">
        <TestimonialCard
        index={0}
          name="Dave C."
          info="Blugenix saved my life at 53, I was so tired all the time but had to
          work and live life with 6 kids. It was time to do something for
          myself. Blugenix made me feel young again. Life is a gift do not waste
          it!"
          image="https://res.cloudinary.com/dtram9qiy/image/upload/v1654551672/my-upload/ei1goyoi1xksln91cwzu.jpg"
        />
        {/* https://res.cloudinary.com/dtram9qiy/image/upload/v1654551672/my-upload/ei1goyoi1xksln91cwzu.jpg */}
        <TestimonialCard
          index={1}
          name="Chris R."
          info="I have over 18 years experience in this industry and I have always been passionate about fitness. However, after an accident left me in a coma I lost nearly 70 pounds of lean muscle mass. With the help of Hormone Replacement Therapy I was able to regain my health and physique. Now in my 40's, I am in the best shape of my life!"
          image="https://res.cloudinary.com/dtram9qiy/image/upload/v1654562776/my-upload/z15jveydfn5utr41hj3a.jpg"
        />
        {/* https://res.cloudinary.com/dtram9qiy/image/upload/v1654562776/my-upload/z15jveydfn5utr41hj3a.jpg */}
      </div>
    </>
  )
}

export default Testimonials
