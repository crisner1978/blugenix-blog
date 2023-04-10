import { motion } from 'framer-motion'
import useFadeInAnimation from '../hooks/useFadeInAnimation'

const Section = ({
  style_section,
  heading,
  subheading,
  para_1,
  para_2,
  para_3,
  children,
  component,
  component_2,
}) => {
  const [setRefs, ctrls, fadeInDown] = useFadeInAnimation()

  return (
    <section className={style_section}>
      <motion.div
        initial="hidden"
        ref={setRefs}
        aria-hidden="true"
        animate={ctrls}
        variants={fadeInDown}
        className={`${
          component_2
            ? 'px-10 lg:max-w-xl xl:max-w-2xl'
            : 'md:max-w-md lg:max-w-xl xl:max-w-2xl '
        }`}
      >
        {heading && (
          <header className="inline-block w-full font-medium uppercase tracking-wide text-gray-500 dark:text-gray-300 xl:text-lg">
            <h1>{heading}</h1>
          </header>
        )}
        {subheading && (
          <h2 className="mt-[10px] inline-flex font-fancy text-2xl font-medium leading-normal md:leading-normal lg:text-3xl lg:leading-snug xl:text-4xl xl:leading-snug">
            {subheading}
          </h2>
        )}

        <div className="text-gray-700 dark:text-gray-300 sm:text-lg">
          <p className="mt-8">{para_1}</p>
          {para_2 && <p className="mt-8">{para_2}</p>}
          {para_3 && <p className="mt-8">{para_3}</p>}
          {component && component}
        </div>
      </motion.div>
      <div
        className={`${
          component_2 !== undefined
            ? 'relative mx-auto w-full rounded-3xl lg:max-w-md'
            : 'relative mb-10 flex items-center justify-center rounded-3xl md:mb-0 md:max-w-md'
        }`}
      >
        {children && children}
        {component_2 && component_2}
      </div>
    </section>
  )
}

export default Section
