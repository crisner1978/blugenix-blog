import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { modalState } from 'atoms/modalAtom'
import Benefits from 'components/Benefits'
import FreeButton from 'components/FreeButton'
import Hero from 'components/Hero'
import MapSection from 'components/MapSection'
import PageDivider from 'components/PageDivider'
import Section from 'components/Section'
import Wave from 'components/layout/Wave'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Curve from "../components/layout/Curve"

const Home: NextPage = () => {
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()
  const { theme } = useTheme()


  return (
    <div className="overflow-hidden">
      <Head>
        <title>Blugenix Hormone Replacement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        image_1="https://res.cloudinary.com/dtram9qiy/image/upload/v1641961381/my-uploads/k01tmcqcnvqgwmjhvy7h.jpg"
        image_2="https://res.cloudinary.com/dtram9qiy/image/upload/v1641955967/blugenix/oucr6qg64ooxu9rtc5h4.png"
        image_3="https://res.cloudinary.com/dtram9qiy/image/upload/v1641955409/blugenix/k2xdhcbhjpvju9qssukz.png"
        slogan="turn back the clock to the way you felt in your 20's"
        description="Blugenix specializes in Bio-Identical Testosterone & Growth Hormone Therapies."
        info="20 years of experience. doctor prescribed and monitored programs include personal health coaches to keep you on track."
        style_1="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[575px] xl:h-[650px] text-white dark:text-gray-200"
        style_2="absolute h-[400px] sm:h-[450px] md:h-[500px] lg:h-[575px] xl:h-[650px] object-cover object-top w-screen"
      >
        <FreeButton
          description="Speak with the team today"
          style_1="md:ml-auto md:pr-6 mt-2 sm:mt-4 align mr-3 md:mr-0"
          style_2="navBtn  sm:text-xl p-3 shadow-inner capitalize"
          onClick={() => setOpen(true)}
        />
      </Hero>
      <Section
        style_section="py-10 md:flex-row-reverse items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10"
        heading="What is Blugenix"
        subheading="Blugenix uses precision and restorative medicine to get real results. Increased energy. Enhanced sex drive. Improved sleep. Increased sense of well-being and focus."
        para_1="All while maximizing your body composition, improving lean muscle mass and accelerating fat metabolism."
        para_2="The initial comprehensive laboratory panel will access your current hormone levels as well as your health panels. With this data, 
                  our team will map out a personalized, doctor monitored therapy program designed for you to achieve your health goals."
        para_3="Our Hormone Replacement Therapies will restore your hormone levels back to where they were in the prime of your life - 
                  allowing you to live your best life no matter your age."
        component={
          <FreeButton
            style_1="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            style_2="text-lg sm:text-xl navBtn shadow-inner p-3 capitalize"
            description="Learn more about Blugenix"
            onClick={() => router.push('/therapies')}
          />
        }
      >
        <img
          className="rounded-3xl"
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1642017528/my-uploads/twllqdxixj4se8zcdnya.jpg"
          alt=""
        />
      </Section>

      <PageDivider div_s="mt-16 -mb-20 mx-20" />

      <Section
        style_section="pt-48 pb-36 md:flex-row items-center md:flex flex flex-col-reverse mx-auto max-w-6xl md:gap-12 px-10"
        heading="How we help"
        subheading="Your coach for performant health and wellness optimization"
        para_1="As we age, our bodies begin to wear out over time. 
                  We lose muscle mass, accumulate bodyfat, experience higher stress levels along with a decreased sense of well-being. 
                  This can be caused by a number of factors, one of them being a decline in our bodies ability to make hormones."
        para_2="What now?"
        para_3="Our team combined with a physician monitored therapy program aims to turn back your biological clock 
                  and provide powerful benefits. By optimizing our clients' hormone levels - you'll essentially feel how you did in your 20's, 
                  feeling completely rejuvenated and revitalized."
        component={
          <FreeButton
            style_1="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            style_2="text-lg sm:text-xl navBtn shadow-inner p-3 capitalize"
            description="learn more today"
            onClick={() => setOpen(true)}
          />
        }
      >
        <img
          className="rounded-3xl "
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1642452655/my-uploads/rhmsygtsndaeynsaryv5.jpg"
          alt=""
        />
      </Section>

      {/* We help optimize our clients' hormone levels, providing powerful benefits from increased energy and 
                         fat burning to improve sex drive and performance. 
                         We're anti-aging experts focused on providing Hormone Replacement Therapy 
                         to turn back your biological clock and provide powerful benefits. Feel completely rejuvenated and revitalized,
                         We provide individualized, 
                         */}
      <Benefits />
      <Wave theme={theme} />

      <MapSection
        para_1="100% of our Clients start their program remotely. Lab work is done
                through LabCorp in your local area. We bring the doctor to you via
                video consultations."
        component={
          <FreeButton
            description="find out more"
            style_1="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            style_2="text-lg sm:text-xl navBtn shadow-inner p-3 capitalize"
            onClick={() => setOpen(true)}
          />
        }
      />

      <PageDivider div_s="mb-20 mx-20" />

      <Section
        style_section="py-10 md:flex-row-reverse items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10"
        heading="How it works"
        subheading="Three Step Process"
        para_1="Everything is Doctor monitored & Doctor prescribed."
        para_2="Our team of experts will work directly with you to create a custom tailored program to fit your needs and get you feeling your best."
        para_3="In partnership with Telemedicine, everything gets shipped right to your door."
        component={
          <FreeButton
            style_1="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            style_2="text-lg sm:text-xl navBtn shadow-inner p-3 capitalize"
            description="take your first step"
            onClick={() => setOpen(true)}
          />
        }
      >
        <div className="overflow-hidden rounded-3xl">
          <img
            className="scale-[1.009] rounded-3xl sm:max-w-sm"
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651073011/my-upload/vyh4v0uwmwuhpgvtmi0q.jpg"
            alt=""
          />
        </div>
      </Section>
      <div className="mx-auto mt-10 max-w-6xl pb-20">
        <div className="grid grid-cols-1 gap-5 px-10 md:grid-cols-3">
          <div className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl">
            <img
              className="steps"
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651075090/my-upload/a9wksql2kb2pzvnqpxda.jpg"
              alt=""
            />
          </div>
          <div className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl">
            <img
              className="steps"
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651075125/my-upload/au38suzmsu1mzgrczvm6.jpg"
              alt=""
            />
          </div>
          <div className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl">
            <img
              className="steps"
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651075148/my-upload/gonhzeluwpd0okuuyrnb.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
