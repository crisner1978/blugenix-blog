import { motion } from 'framer-motion';
import useFadeInAnimation from '../hooks/useFadeInAnimation';

const Section = ({
  style_section,
  heading,
  subheading,
  para_1,
  para_2,
  para_3,
  children,
  component,
  component_2
}) => {
  const [setRefs, ctrls, fadeInDown] = useFadeInAnimation()

  return (
      <section className={style_section}>
        <motion.div initial="hidden" ref={setRefs} aria-hidden="true" animate={ctrls} variants={fadeInDown} className={`${component_2 ? "lg:max-w-xl xl:max-w-2xl px-10" : "md:max-w-md lg:max-w-xl xl:max-w-2xl "}`}>
          {heading && (
            <header className="inline-block uppercase font-medium xl:text-lg tracking-wide text-gray-500 dark:text-gray-300 w-full">
              <h1>{heading}</h1>
            </header>
          )}
          {subheading && (
            <h2 className="inline-flex text-2xl lg:text-3xl xl:text-4xl mt-[10px] font-fancy font-medium leading-normal md:leading-normal lg:leading-snug xl:leading-snug">
              {subheading}
            </h2>
          )}

          <div className="sm:text-lg dark:text-gray-300 text-gray-700">
            <p className="mt-8">
              {para_1}
            </p>
            {para_2 && (
              <p className="mt-8">{para_2}</p>
            )}
            {para_3 && (
              <p className="mt-8">{para_3}</p>
            )}
            {component && component}
          </div>
        </motion.div>
        <div className={`${component_2 !== undefined ? "lg:max-w-md w-full relative rounded-3xl mx-auto" : "rounded-3xl flex items-center justify-center mb-10 md:mb-0 md:max-w-md relative"}`}>
          {children && children}
          {component_2 && component_2}
        </div>
      </section>
  );
};

export default Section;
