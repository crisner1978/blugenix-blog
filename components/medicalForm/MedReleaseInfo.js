import { DateInput, HistoryCheckBox, TextArea } from 'components/shared'
import React from 'react'
import { useForm } from 'react-hook-form'

const MedReleaseInfo = ({
  setFormValues,
  formValues,
  nextFormStep,
  formStep,
}) => {
  const { register, handleSubmit, watch, control } = useForm({
    defaultValues: formValues,
  })
  const watchRelease = watch('medicalRelease')
  console.log('formValues DetailedInfo', formValues)

  const onSubmit = (data) => {
    setFormValues(data)
    nextFormStep()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <form
      id="detail-info"
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        formValues?.sex === 'female' && formStep === 5
          ? 'mb-8 text-gray-700  dark:text-gray-200'
          : formStep === 4
          ? 'mb-8 text-gray-700  dark:text-gray-200'
          : 'hidden'
      }`}
    >
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">
          Medical Record Release
        </h3>
        <DateInput
          control={control}
          name="date"
          label="Date"
          disabled={true}
          labelStyle="dateFormLabel"
        />
      </div>
      <section className="mb-10 space-y-2">
        <div className="mb-8 space-y-8 text-sm text-gray-700 dark:text-gray-500">
          <p>
            Most patients are very anxious to hear the results of their lab
            tests or other determinations made by our medical staff regarding
            their treatment. Due to a physician's schedule, communication of the
            results, especially if they are within normal ranges, is sometimes
            delayed. Although all Blugenix personnel, both professionals and
            nonprofessionals, are part of the Health Care Operations of the
            practice, and therefore do not require a specific HIPAA consent
            form, Blugenix takes the confidentiality of your personal health
            information very seriously and does not permit its personnel who are
            not directly involved in your medical assessments and treatment with
            access to your medical records without your written consent. By
            signing this form, you will give permission to allow your Blugenix
            advisor, or other administrative staff member, to communicate to you
            via phone, email, in writing, or in person, protected health
            information pertaining to your medical care.
          </p>
          <p>
            This consent form does not allow Blugenix to share your health
            information with any third party for any reason. It simply
            authorizes our administrative staff to convey information from our
            medical staff to you, at your request. I further understand that
            administrative staff cannot answer specific questions about the
            meaning of the results or treatment modalities, and if I have such
            questions after receiving the results, the administrative staff will
            have a physician or other qualified health professional contact me
            to answer my questions.
          </p>
          <h3 className="text-lg font-semibold">
            Authorization to Release Health Information to Myself
          </h3>
          <p>
            I, the undersigned patient, herby give my consent for Blugenix and
            its nonmedical professional and administrative staff to disclose my
            protected health information (PHI) to me pertaining to my medical
            results and treatment.
          </p>
          <p>
            With this consent, my Blugenix advisor, or other administrative
            staff, may communicate to me by phone, email, in writing or in
            person information that assists the practice in carrying out
            operations related to my treatment: such as, appointment reminders,
            billing issues, and communications related to my clinical care,
            including laboratory test results. I acknowledge that such advisor
            or staff cannot answer specific questions about the results or
            course of my treatment, and that I can request a physician or other
            health professional to conduct me to answer my questions.
          </p>
          <p>
            I understand that I may revoke my consent in writing except to the
            extent that the practice has already made disclosures in reliance
            upon my prior consent. I understand that this form is not required
            under the HIPAA privacy rule, but if I choose not to consent, or
            later revoke consent, Blugenix may be unable to continue to provide
            treatment to me, but they will not do so without affording me a
            reasonable time, not longer than thirty days, to obtain a successor
            physician/practice.
          </p>
        </div>
        <div>
          <h3 className="mb-8 text-sm text-blue-600 dark:text-blue-500">
            If you consent to the release of information and would like access
            to your medical records, please complete the following below.
          </h3>
          <HistoryCheckBox
            {...register('medicalRelease')}
            name="medicalRelease"
            label="Check the box to consent to the release of your medical information to yourself."
          />
          {watchRelease && (
            <div className="col-span-2 flex items-center gap-x-2 pt-4">
              <label
                className="nowrap whitespace-nowrap py-2 text-sm"
                htmlFor="otherHistory"
              >
                Patient Name
              </label>
              <input
                {...register('name')}
                name="name"
                className="singleLineInput mb-0"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
          )}
        </div>
      </section>
      <button className="formSubmitBtn w-full" type="submit">
        Next
      </button>
    </form>
  )
}

export default MedReleaseInfo
