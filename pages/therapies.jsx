import { modalState } from 'atoms/modalAtom'
import {
  Banner,
  FreeButton,
  PageDivider,
  Section,
  StartFormBox,
  Symptoms,
  Testimonials
} from 'components'
import { Categories } from 'components/blog'
import BlogHeader from 'components/layout/BlogHeader'
import Loader from 'components/Loader'
import { BenefitSection } from 'components/sections'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import {
  getSymptomSection,
  getTestimonialSection,
  getTherapyDetails,
  getTherapyHero
} from 'services/queries'
import { useTherapyState } from '../atoms/therapyAtom'

const TherapiesPage = ({ hero, symptomSec, testimonialSec }) => {
  const [open, setOpen] = useRecoilState(modalState)
  const [therapyValue, setTherapyValue] = useTherapyState()
  const therapyRef = useRef(null)
  const router = useRouter()

  const { data, isSuccess, isLoading } = useQuery(
    ['therapyDetails', therapyValue],
    () => {
      return therapyValue && getTherapyDetails(therapyValue)
    }
  )

  const handleClick = (slug) => {
    therapyRef.current.scrollIntoView({ behavior: 'smooth' })
    setTherapyValue(slug)
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <Banner
        data={hero}
        formStart={null}
        component={
          <FreeButton
            text={hero?.buttonText}
            tw="md:ml-auto md:pr-5 mt-2 sm:mt-4 align mr-3 md:mr-0"
            onClick={() => setOpen(true)}
          />
        }
      />
      {/* Symptom Section */}
      <Section
        style_section="lg:flex-row pt-12 lg:pb-12 flex flex-col max-w-6xl mx-auto lg:gap-12"
        heading={symptomSec?.heading}
        subheading={symptomSec?.subheading}
        para_1={symptomSec?.text1}
        para_2={symptomSec?.text2}
        para_3={symptomSec?.text3}
        component={
          <FreeButton
            tw="hidden lg:flex text-center lg:text-left text-white dark:text-gray-200 mt-8"
            text={symptomSec?.buttonText}
            onClick={() => setOpen(true)}
          />
        }
        component_2={<Symptoms setOpen={setOpen} />}
      />
      <PageDivider />

       {/* Therapy Details */}
      <BlogHeader therapy={true} ref={therapyRef} handleClick={handleClick} />
      <div className="">
        {isLoading ? (
          <div className="my-80">
            <Loader />
          </div>
        ) : (
          <Section
            style_section="md:flex-row-reverse pt-4 pb-12 px-10 items-center flex flex-col-reverse max-w-6xl mx-auto md:gap-12"
            heading={data?.heading}
            subheading={data?.subheading}
            para_1={data?.text}
            para_2={data?.text2}
            para_3={data?.text3}
            component={
              <FreeButton
                tw="text-center md:text-left text-white dark:text-gray-200 mt-8"
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
              alt={data?.slug}
            />
          </Section>
        )}

        <PageDivider />
        {isSuccess && <BenefitSection therapyValue={therapyValue} />}
        <div className="mx-auto grid max-w-6xl px-10 pt-12 pb-6">
          <Categories therapy={true} handleClick={handleClick} />
        </div>
        <PageDivider />

        {/* Testimonials */}
        <Testimonials data={testimonialSec} />
        <StartFormBox
          title={testimonialSec?.boxTitle}
          button={testimonialSec?.boxButtonText}
        />
      </div>
    </div>
  )
}

export default TherapiesPage

export const getStaticProps = async () => {
  const symptomSection = await getSymptomSection('symptom-section')
  const testimonialSection = await getTestimonialSection('testimonial-section')
  const hero = (await getTherapyHero()) || []

  const responses = await Promise.all([
    symptomSection,
    testimonialSection,
    hero[0],
  ])

  return {
    props: {
      hero: responses[2],
      symptomSec: responses[0],
      testimonialSec: responses[1],
    },
    revalidate: 60,
  }
}
