import { motion } from 'framer-motion';
import useFadeInDown from '../hooks/useFadeInDown';

const Section = ({
  style_section,
  heading,
  subheading,
  para_1,
  para_2,
  para_3,
  children,
  component,
}) => {
  const [ref, ctrls, fadeInDown] = useFadeInDown()

  return (
    <div>
      <section className={style_section}>
        <motion.div initial="hidden" ref={ref} aria-hidden="true" animate={ctrls} variants={fadeInDown} className="md:max-w-md lg:max-w-xl xl:max-w-2xl">
          {heading && (
            <header className="inline-block uppercase font-medium xl:text-lg tracking-wide text-gray-500 dark:text-gray-300 w-full">
              {heading}
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
            {component}
          </div>
        </motion.div>
        <div className="rounded-xl flex items-center justify-center mb-[50px] md:mb-0 md:max-w-xl relative">
          {children}
        </div>
      </section>
    </div>

  );
};

export default Section;
