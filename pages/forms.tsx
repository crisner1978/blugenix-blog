import { modalState } from 'atoms/modalAtom'
import { Banner, FreeButton, PageDivider, Section } from 'components'
import {
  DetailedInfo,
  FormCard,
  FormWidget,
  HistoryInfo,
  PatientInfo,
} from 'components/medicalForm'
import Head from 'next/head'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { useFormStart, useFormValueState } from '../atoms/formAtom'

const FormsPage = () => {
  const [open, setOpen] = useRecoilState(modalState)
  const [formStep, setFormStep] = useState(0)
  const [formStart, setFormStart] = useFormStart()
  const [formValues, setFormValues] = useFormValueState()

  console.log('formStep', formStep)

  const nextFormStep = () => setFormStep((currStep) => currStep + 1)
  const prevFormStep = () => setFormStep((currStep) => currStep - 1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-slate-900">
      <Head>
        <title>Blugenix Medical History Forms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner>
        <FreeButton
          text="still have questions?"
          tw="md:ml-auto md:pr-5 mt-2 sm:mt-4 align mr-3 md:mr-0"
          onClick={() => setOpen(true)}
        />
      </Banner>
      <Section
        style_section="py-20 md:flex-row-reverse items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10"
        heading="Medical History Forms"
        subheading="In order to be considered for therapy, please complete the Medical
        History Forms below."
        para_1="These forms in conjunction with your laboratory
        results will help our doctor determine your optimal therapy program."
        para_2="Answer all questions to the best of your ability. If you have questions, please be sure to ask your counselor."
        para_3={
          <span>
            All Private Health Information is protected by{' '}
            <a
              className="text-blue-600"
              href="https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              HIPAA
            </a>
            .
          </span>
        }
        component={
          <FreeButton
            text="Ready for labs?"
            tw="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            onClick={() => setOpen(true)}
          />
        }
      >
        <img
          className="rounded-3xl"
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1651754360/my-upload/fc97gfgls84msuhcgkg6.jpg"
          alt="online medical history forms"
        />
      </Section>
      <PageDivider />
      <main
        className={`mx-auto mt-8 grid max-w-6xl grid-cols-1 px-10 lg:grid-cols-3 lg:gap-12 ${
          !formStart && '!max-w-3xl !grid-cols-1'
        }`}
      >
        <section className="col-span-1 lg:col-span-2">
          {formStart ? (
            <FormCard prevFormStep={prevFormStep} currStep={formStep}>
              {formStep >= 0 && (
                <PatientInfo
                  setFormValues={setFormValues}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              )}
              {formStep >= 1 && (
                <HistoryInfo
                  setFormValues={setFormValues}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              )}
              {formStep >= 2 && (
                <DetailedInfo
                  setFormValues={setFormValues}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              )}
            </FormCard>
          ) : (
            <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg dark:bg-stone-800">
              <h3 className="text-center text-lg sm:text-xl md:text-2xl">
                Ready to complete the Medical History Forms?
              </h3>
              <div className="mt-8 flex justify-center">
                <button
                  className="page__btn text-white"
                  onClick={() => setFormStart(true)}
                >
                  Click To Begin
                </button>
              </div>
            </div>
          )}
          {/* Start Form Here */}
        </section>
        {formStart && (
          <section className="col-span-1 lg:col-span-1">
            <div className="relative lg:sticky lg:top-[70px] lg:mb-8">
              {/* Form Status Box */}
              <FormWidget
                setFormStep={setFormStep}
                setFormStart={setFormStart}
                setFormValues={setFormValues}
                prevFormStep={prevFormStep}
                currStep={formStep}
              />
            </div>
          </section>
        )}

        {/* Flag if Female and provide extra form, if not proceed */}

        {/* Submit Form */}

        {/* Completed Screen */}

        {/* Then push to Blog or Home Page */}

        {/* Send to Api, Sendgrid Email, Store in MongoDB */}
      </main>
    </div>
  )
}

export default FormsPage
