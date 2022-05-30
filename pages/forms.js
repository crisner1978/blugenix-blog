import { modalState } from 'atoms/modalAtom'
import { Banner, FreeButton, PageDivider, Section } from 'components'
import {
  AgreementInfo,
  DetailedInfo,
  FemaleInfo,
  FormCard,
  FormCompleted,
  FormWidget,
  HistoryInfo,
  MedReleaseInfo,
  PatientInfo,
  SymptomsInfo
} from 'components/medicalForm'
import Head from 'next/head'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { getFormHero, getFormSections } from 'services/queries'
import { useFormStart, useFormValueState } from '../atoms/formAtom'

const FormsPage = ({ data, formSections }) => {
  const [open, setOpen] = useRecoilState(modalState)
  const [formStep, setFormStep] = useState(0)
  const [formStart, setFormStart] = useFormStart()
  const [formValues, setFormValues] = useFormValueState()

  const nextFormStep = () => setFormStep((currStep) => currStep + 1)
  const prevFormStep = () => setFormStep((currStep) => currStep - 1)

  const handleStartForm = () => {
    setFormStart(true)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }


  return (
    <div className="min-h-screen">
      <Head>
        <title>Blugenix Medical History Forms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {formStart ? (
        <main
          className={`mx-auto pt-8 grid max-w-6xl grid-cols-1 px-3 sm:px-10 lg:grid-cols-3 lg:gap-12 ${!formStart && '!max-w-3xl !grid-cols-1'
            }`}
        >
          <section className="col-span-1 lg:col-span-2">

            <FormCard prevFormStep={prevFormStep} currStep={formStep} formValues={formValues}>
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
              {formStep >= 3 && (
                <SymptomsInfo
                  setFormValues={setFormValues}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              )}
              {formStep >= 4 && formValues?.[0]?.patientInfo.sex === "female" ? (
                <FemaleInfo
                  setFormValues={setFormValues}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              ) : (
                <MedReleaseInfo
                  setFormValues={setFormValues}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              )}
              {formStep >= 5 && formValues?.[0]?.patientInfo.sex === "female" ? (
                <MedReleaseInfo
                  setFormValues={setFormValues}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              ) : (
                <AgreementInfo
                  setFormValues={setFormValues}
                  setFormStart={setFormStart}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              )}
              {formStep >= 6 && formValues?.[0]?.patientInfo.sex === "female" ? (
                <AgreementInfo
                  setFormValues={setFormValues}
                  setFormStart={setFormStart}
                  formValues={formValues}
                  nextFormStep={nextFormStep}
                  formStep={formStep}
                />
              ) : formStep >= 6 && (
                <FormCompleted formValues={formValues} />
              )}
              {formStep > 6 && formValues?.[0]?.patientInfo.sex === "female" && (
                <FormCompleted formValues={formValues} />
              )}
            </FormCard>
          </section>
          {formStart && (
            <section className="col-span-1 lg:col-span-1">
              <div className="relative lg:sticky lg:top-[70px] lg:mb-8">
                {/* Form Status Box */}
                <FormWidget
                  formValues={formValues}
                  setFormStep={setFormStep}
                  setFormStart={setFormStart}
                  setFormValues={setFormValues}
                  prevFormStep={prevFormStep}
                  currStep={formStep}
                />
              </div>
            </section>
          )}
        </main>
      ) : (
        <>
          <Banner
            data={data}
            formStart={formStart}
            component={<FreeButton
              text="still have questions?"
              tw="md:ml-auto md:pr-5 mt-2 sm:mt-4 align mr-3 md:mr-0"
              onClick={() => setOpen(true)}
            />}
          />
          {formSections.map((item, index) => (
            <div key={item.id}>
              <Section
                style_section={`${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} py-20 items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10`}
                heading={item.heading}
                subheading={item.subheading}
                para_1={item.text}
                para_2={item.text2}
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
                    tw="text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
                    text={item.buttonText}
                    onClick={() => item.modal === true ? setOpen(true) : router.push("/therapies")}
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
          <section
            className={`mx-auto mt-8 grid max-w-6xl grid-cols-1 px-3 sm:px-10 lg:grid-cols-3 lg:gap-12 ${!formStart && '!max-w-3xl !grid-cols-1'
              }`}
          >
            <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg dark:bg-stone-800">
              <h3 className="text-center text-lg sm:text-xl md:text-2xl">
                Ready to complete the Medical History Forms?
              </h3>
              <div className="mt-8 flex justify-center">
                <button
                  className="page__btn text-white"
                  onClick={handleStartForm}
                >
                  Click To Begin
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default FormsPage

export const getStaticProps = async () => {
  const hero = await getFormHero() || []
  const formSections = await getFormSections() || []

  return {
    props: {
      data: hero[0],
      formSections
    }
  }
}
