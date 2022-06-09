import { modalState } from 'atoms/modalAtom'
import {
  Banner,
  FreeButton,
  PageDivider,
  Section,
  StartFormBox,
  Symptoms,
  Testimonials,
} from 'components'
import { Categories } from 'components/blog'
import BlogHeader from 'components/layout/BlogHeader'
import Loader from 'components/Loader'
import { BenefitSection } from 'components/sections'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { getTherapyDetails, getTherapyHero, getSymptomSection } from 'services/queries'
import { useTherapyState } from '../atoms/therapyAtom'

const TherapiesPage = ({ hero, symptomSection }) => {
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

  console.log("symptomSection", symptomSection)
  console.log("data", data)

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
      <Section
        style_section="lg:flex-row pt-12 lg:pb-12 flex flex-col max-w-6xl mx-auto lg:gap-12"
        heading={symptomSection?.heading}
        subheading={symptomSection?.subheading}
        para_1={symptomSection?.text1}
        para_2={symptomSection?.text2}
        para_3={symptomSection?.text3}
        component={
          <FreeButton
            tw="hidden lg:flex text-center lg:text-left text-white dark:text-gray-200 mt-8"
            text={symptomSection?.buttonText}
            onClick={() => setOpen(true)}
          />
        }
        component_2={<Symptoms setOpen={setOpen} />}
      />
      <PageDivider />

      <BlogHeader therapy={true} ref={therapyRef} handleClick={handleClick} />
      {/* Therapy Details */}
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
        {/* Testimonial Section */}
        <Testimonials />
        {/* SSR or ISR this section with GraphCMS */}
        {/* Add button to post a Testimonial */}
        {/* Add Page with Testimonial Form */}

        <StartFormBox
          title="Ready to share your story with Blugenix?"
          button="Drop your testimonial"
          route="/drop-testimonial"
        />
      </div>
    </div>
  )
}

export default TherapiesPage

export const getStaticProps = async () => {
  const hero = (await getTherapyHero()) || []
  const symptomSection = await getSymptomSection("symptom-section")

  return {
    props: {
      hero: hero[0],
      symptomSection
    },
  }
}
