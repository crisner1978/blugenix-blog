import { modalState } from 'atoms/modalAtom'
import { Banner, FreeButton, PageDivider, Section } from 'components'
import { Categories } from 'components/blog'
import BlogHeader from 'components/layout/BlogHeader'
import Loader from 'components/Loader'
import { BenefitSection } from "components/sections"
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { getTherapyDetails, getTherapyHero } from 'services/queries'
import { useTherapyState } from '../atoms/therapyAtom'

const TherapiesPage = ({ hero }) => {
  const [open, setOpen] = useRecoilState(modalState)
  const [therapyValue, setTherapyValue] = useTherapyState()
  const therapyRef = useRef(null)
  const router = useRouter()

  const { data, isSuccess } = useQuery(['therapyDetails', therapyValue], () => {
    return therapyValue && getTherapyDetails(therapyValue)
  })

  const handleClick = (slug) => {
    therapyRef.current.scrollIntoView({ behavior: 'smooth' })
    setTherapyValue(slug)
  }

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
      <main className="">
        {!data ? (
          <div className='my-80'>
            <Loader />
          </div>
        ) : (
          <Section
            style_section={`md:flex-row pb-12 px-10 items-center flex flex-col-reverse max-w-6xl mx-auto md:gap-12`}
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
              className="rounded-3xl shadow-lg"
              src={data?.sectionImage.url}
              alt=""
            />
          </Section>
        )}

        <PageDivider />
        {isSuccess && <BenefitSection therapyValue={therapyValue} />}
        <div className="pt-12 px-10 grid sm:grid-cols-2 sm:gap-12 max-w-6xl mx-auto">
          <div className="w-auto">
            <Categories therapy={true} handleClick={handleClick} />
          </div>
          <div className="w-full">
            <Categories therapy={true} handleClick={handleClick} />
          </div>
        </div>
      </main>      
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
