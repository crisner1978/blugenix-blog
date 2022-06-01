import { modalState } from 'atoms/modalAtom'
import FreeButton from 'components/FreeButton'
import PageDivider from 'components/PageDivider'
import Section from 'components/Section'
import {
  BenefitSection,
  HeroSection,
  MapSection,
  StepsSection
} from 'components/sections'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { getHero, getHomeSections } from 'services/queries'
import { IHero, IHomeSection } from 'typings'

interface Props {
  hero: IHero
  homeSections: [IHomeSection]
}

const Home = ({ hero, homeSections }: Props) => {
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()

  return (
    <div className="overflow-hidden min-h-screen">
      <HeroSection hero={hero}>
        <FreeButton
          text="Speak with the team today"
          tw="md:ml-auto md:pr-5 mt-2 sm:mt-4 align mr-3 md:mr-0"
          onClick={() => setOpen(true)}
        />
      </HeroSection>

      {homeSections.map((item, index) => (
        <div key={item.id}>
          <Section
            style_section={`${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} py-12 items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10`}
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
      ))}

      <BenefitSection therapyValue={undefined} />
      <MapSection
        component={
          <FreeButton
            text="find out more"
            tw="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            onClick={() => setOpen(true)}
          />
        }
      />
      <PageDivider />
      <StepsSection setOpen={setOpen} />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const hero = (await getHero()) || []
  const homeSections = (await getHomeSections()) || []

  return {
    props: {
      hero: hero[0],
      homeSections,
    },
  }
}
