import { modalState } from 'atoms/modalAtom'
import { Banner, FreeButton, PageDivider, Section, Wave } from 'components'
import { HeroSection } from 'components/sections'
import { GetStaticProps } from 'next'
import { useTheme } from 'next-themes'
import React from 'react'
import { useRecoilState } from 'recoil'
import { getTherapyHero } from 'services/queries'
import { IHero } from 'typings'

interface Props {
  hero: IHero
}

const TherapiesPage = ({ hero }: Props) => {
  const [open, setOpen] = useRecoilState(modalState)
  const { theme } = useTheme()

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-slate-900">
      <Banner
        data={hero}
        formStart={null}
        component={
          <FreeButton
            text="Start your therapy today"
            tw="md:ml-auto md:pr-5 mt-2 sm:mt-4 align mr-3 md:mr-0"
            onClick={() => setOpen(true)}
          />
        }
      />

      {/* {homeSections.map((item, index) => (
        <div key={item.id}>
          <Section
            style_section={`${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} py-20 items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10`}
            heading={item.heading}
            subheading={item.subheading}
            para_1={item.text}
            para_2={item.text2}
            para_3={item.text3}
            component={
              <FreeButton
                tw="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
                text={item.buttonText}
                onClick={() => item.modal === true ?  setOpen(true) : router.push("/therapies")}
              />
            }
          >
            <img
              className="rounded-3xl"
              src={item.sectionImage.url}
              alt={item.heading}
            />
          </Section>
          <PageDivider />
        </div>
      ))} */}

      {/* <BenefitSection /> */}
      <Wave theme={theme} />
      {/* <MapSection
        component={
          <FreeButton
            text="find out more"
            tw="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            onClick={() => setOpen(true)}
          />
        }
      /> */}
      <PageDivider />
      {/* <StepsSection setOpen={setOpen} /> */}
    </div>
  )
}

export default TherapiesPage

export const getStaticProps: GetStaticProps = async () => {
  const hero = (await getTherapyHero()) || []

  return {
    props: {
      hero: hero[0],
    },
  }
}
