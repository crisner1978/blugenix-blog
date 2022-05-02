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
  return (
    <div>
      <section className={style_section}>
        <div className="md:max-w-md lg:max-w-xl xl:max-w-2xl">
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

          <div className="text-lg font-normal dark:text-gray-200 text-gray-700">
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
        </div>
        <div className="rounded-xl flex items-center justify-center mb-[50px] md:mb-0 md:max-w-xl relative">
          {children}
        </div>
      </section>
    </div>

  );
};

export default Section;
