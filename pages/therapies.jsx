import { modalState } from 'atoms/modalAtom'
import { Banner, FreeButton, PageDivider, Section } from 'components'
import { Categories } from 'components/blog'
import BlogHeader from 'components/layout/BlogHeader'
import React, { useRef } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { getTherapyDetails, getTherapyHero } from 'services/queries'
import { useTherapyState } from '../atoms/therapyAtom'

const TherapiesPage = ({ hero }) => {
  const [open, setOpen] = useRecoilState(modalState)
  const [therapyValue, setTherapyValue] = useTherapyState()
  const therapyRef = useRef(null)

  const { data } = useQuery(['therapyDetails', therapyValue], () => {
    return therapyValue && getTherapyDetails(therapyValue)
  })

  const handleClick = (slug) => {
    therapyRef.current.scrollIntoView({ behavior: 'smooth' })
    setTherapyValue(slug)
  }
  console.log('data', data)
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
      <BlogHeader therapy={true} ref={therapyRef} handleClick={handleClick} />
      <main className="top-20 mx-auto max-w-6xl px-10">
        <Section
          style_section={`md:flex-row pb-20 items-center flex flex-col-reverse max-w-6xl md:gap-12`}
          heading={data?.heading}
          subheading={data?.subheading}
          para_1={data?.text}
          para_2={data?.text2}
          para_3={data?.text3}
          component={
            <FreeButton
              tw="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
              text={data?.buttonText}
              onClick={() =>
                data?.modal === true ? setOpen(true) : router.push('/forms')
              }
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
        <div className="mt-8">
          <Categories therapy={true} handleClick={handleClick} />
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

export const getStaticProps = async () => {
  const hero = (await getTherapyHero()) || []

  return {
    props: {
      hero: hero[0],
    },
  }
}
