import { modalState } from 'atoms/modalAtom'
import { Banner, FreeButton, PageDivider, Section } from 'components'
import { Categories } from 'components/blog'
import BlogHeader from 'components/layout/BlogHeader'
import Loader from 'components/Loader'
import { BenefitSection } from 'components/sections'
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

      {/* Symptoms will grab with SSR or SSG 
      {`${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} py-12 items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10`}
      */}
      <div>
          <Section
            style_section="md:flex-row pt-12 md:py-12 px-10 items-center flex flex-col max-w-6xl mx-auto md:gap-12"
            heading="Why hormone therapy"
            subheading="Many of the clients who are new to hormone therapy are unsure exactly how it helps their body combat aging while boosting overall health and performance."
            para_1="What symptoms should you be looking for?"
            para_2="Here's some of the symptoms our therapies dramatically improve when it comes to your health, wellness, and lifestyle."
            // para_3={item.text3}
            component={
              <FreeButton
                tw="hidden md:flex text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
                text="Live your best"
                onClick={() => setOpen(true)}
              />
            }
          >
            <div className='pt-10 md:pt-0'>
              <h1 className='navLogoActive text-center mb-2 inline-block uppercase font-bold xl:text-lg tracking-wide w-full'>High Body Fat</h1>
              <img
              className="rounded-3xl"
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1654128487/my-upload/z0dix7y1f6145upymozz.jpg"
              alt=""
            />
            <p className='sm:text-lg dark:text-gray-300 text-gray-700 px-4 pt-2 align-middle'>Looking to decrease your body fat percentage and tighten up your body?</p>
            <FreeButton
                tw="md:hidden text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
                text="Live your best"
                onClick={() => setOpen(true)}
              />
            </div>
            
          </Section>
          <PageDivider />
        </div>


      <BlogHeader therapy={true} ref={therapyRef} handleClick={handleClick} />
      <main className="">
        {!data ? (
          <div className="my-80">
            <Loader />
          </div>
        ) : (
          <Section
            style_section="md:flex-row-reverse pb-12 px-10 items-center flex flex-col-reverse max-w-6xl mx-auto md:gap-12"
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
        <div className="mx-auto grid max-w-6xl px-10 pt-12">
          <Categories therapy={true} handleClick={handleClick} />
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
