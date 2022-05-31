import { modalState } from 'atoms/modalAtom'
import { Banner, FreeButton, PageDivider, Section, Wave } from 'components'
import { Categories } from 'components/blog'
import BlogHeader from 'components/layout/BlogHeader'
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
    <div className="min-h-screen">
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
      <BlogHeader title="The Therapies" therapy={true} />
      <main className='max-w-6xl mx-auto px-10 top-20'>
        <Section
          style_section={`md:flex-row pb-20 items-center flex flex-col-reverse max-w-6xl md:gap-12`}
          heading="Bio-Identical Hormone Therapy"
          subheading="Blugenix utilizes bio-identical hormones with restorative medicine to treat people with low or unbalanced hormones."
          para_1="It's a tested and proven method of beating many issues associated with aging from low libido, to decreased energy levels, muscle loss, and increased fat deposits."
          para_2="Bio-identical hormone therapy is also called natural hormone therapy. Why? Because it uses only naturally-occurring hormones already found in your body. Age and other factors can lead these natural hormones to decrease. This leads to the problems mentioned above."
          para_3="But, you can turn back the clock to the way you felt in your 20's with Blugenix."
          component={
            <FreeButton
              tw="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
              text="Let's get started"
              onClick={() => setOpen(true)}
            />
          }
        >
          <img
            className="rounded-3xl"
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1653755506/my-upload/njtqswdds7sxuddazjlu.jpg"
            alt=""
          />
        </Section>
        <PageDivider />
        <div className='mt-8'>
          <Categories therapy={true} />
        </div>
        
      </main>

      {/* {homeSections.map((item, index) => (
        <div key={item.id}>
          
        </div>
      ))} */}

      {/* <BenefitSection /> */}

      {/* <MapSection
        component={
          <FreeButton
            text="find out more"
            tw="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            onClick={() => setOpen(true)}
          />
        }
      /> */}
      {/* <PageDivider /><Wave theme={theme} /> */}
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
