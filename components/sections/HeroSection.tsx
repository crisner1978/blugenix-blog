import { ReactChild } from "react";
import { IHero } from "typings";

interface Props {
  children: ReactChild
  hero: IHero
}

const HeroSection = ({ hero, children }: Props) => {
  return (
    <section className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[575px] xl:h-[650px] text-white dark:text-gray-100">
      <img src={hero.heroImage.url} className="hero__image" alt="Blugenix Hero" />
      <img src={hero.bgGradient1.url} className="hero__image" alt="background gradiant" />
      <img src={hero.bgGradient2.url} className="hero__image" alt="background gradiant" />
      <div className="absolute top-5 md:top-10 lg:top-20 xl:top-32 w-full text-center md:text-right capitalize">
        <header className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl ml-auto max-w-3xl px-5 sm:px-16 md:px-0 md:pr-5">
          {hero.slogan}
        </header>
        <header className="mt-20 sm:mt-16 sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 md:ml-auto px-2 sm:px-10 md:pr-5">
          {hero.about}
        </header>
        <header className="mt-2 sm:mt-4 sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 md:ml-auto px-2 sm:px-10 md:px-0 md:pr-5">
          {hero.info}
        </header>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
