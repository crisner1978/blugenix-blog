const Hero = ({
  image_1,
  image_2,
  image_3,
  slogan,
  description,
  info,
  style_1,
  style_2,
  children,
}) => {
  return (
    <section className={style_1}>
      <img src={image_1} className={style_2} alt="Blugenix Hero" />
      <img src={image_2} className={style_2} alt="background gradiant" />
      <img src={image_3} className={style_2} alt="background gradiant" />
      <div className="absolute top-5 md:top-10 lg:top-20 xl:top-32 w-full text-center md:text-right capitalize">
        <header className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl ml-auto max-w-3xl px-5 sm:px-16 md:px-0 md:pr-6">
          {slogan}
        </header>

        <header className="mt-20 sm:mt-16 font-fancy text-lg sm:text-xl md:text-2xl max-w-lg mx-auto md:mx-0 md:ml-auto px-2 sm:px-16 md:px-0 md:pr-6">
          {description}
        </header>
        <header className="mt-2 sm:mt-4 font-fancy text-lg sm:text-xl md:text-2xl max-w-xl md:max-w-lg mx-auto md:mx-0 md:ml-auto px-2 sm:px-16 md:px-0 md:pr-6">
          {info}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Hero;
