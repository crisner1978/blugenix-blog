import { DateInput, HistoryCheckBox } from 'components/shared'
import React from 'react'
import { useForm } from 'react-hook-form'

const AgreementInfo = ({
  setFormValues,
  formValues,
  nextFormStep,
  formStep,
}) => {
  const { register, handleSubmit, watch, control } = useForm({ mode: "onBlur" })
  const watchTreatmentAgreement = watch("treatmentAgreement")

  const onSubmit = (data) => {
    let info = {
      agreementInfo: data
    }
    setFormValues((oldFormValues) => [...oldFormValues, info])
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
        formValues[0]?.patientInfo.sex === 'female' && formStep === 6
          ? 'mb-8 text-gray-700  dark:text-gray-200'
          : formStep === 5
          ? 'mb-8 text-gray-700  dark:text-gray-200'
          : 'hidden'
      }`}
    >
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">
          Treatment Agreement
        </h3>
        <DateInput
          control={control}
          name="date"
          label="Date"
          disabled={true}
          labelStyle="dateFormLabel"
        />
      </div>
      <section className="mb-7 space-y-2 text-sm">
        <p>
          This agreement between <span>{formValues?.name}("Patient")</span> and
          Blugenix ("Blugenix") establishes guidlines and conditions required
          for the use of hormone replacement therapy (HRT) involving DEA
          "controlled" or "scheduled" medications. Blugenix and Patient agree
          that these guidlines and conditions are in essential factor in
          maintaining a successful patient/physician relationship. Adverse side
          effects and/or physical/psychological dependence may develop after
          repeated use of these medications and therefore these agents are
          prescribed with caution. The Patient accepts and agrees to the
          following conditions.
        </p>
        <ol className='list-decimal list-inside sm:px-5 py-4 space-y-4 '>
          <li>
            I understand that the medical treatment offered by Blugenix and
            their Physician(s) is not accompanied by any claims, guarantees,
            promises or warranties.
          </li>
          <li>
            I understand that the medications I have purchased are prescribed
            for me based upon diagnosis derived from my submitted medical
            history, blood/lab work, and physical examination. They are not to
            be used exclusively for treatment of these diagnoses.
          </li>
          <li>
            I will not attempt to obtain "scheduled" hormone replacemnt therapy
            medications illegally or from any other healthcare practitioners
            without disclosing my current medication usage. I understand that
            it's against the law to do so.
          </li>
          <li>
            I will immediately report any adverse side effects related to the
            use of my medication to Blugenix and discontinue use until advised
            to resume usage by Blugenix.
          </li>
          <li>
            I understand that the Blugenix Physician (MD) and/or Licensed
            Physician's Assistant(PA C) are available for questions and/or
            concerns during normal business hours throughout the course of my
            treatment.
          </li>
          <li>
            I will safegaurd my medications from loss or theft and will be
            responsible for their safekeeping.
          </li>
          <li>
            I agree that these medications are for my personal use only and no
            other purpose and I will not share, sell, or trade my medications.
          </li>
          <li>
            I agree that I will use my medications at the prescribed rate and
            dosage and will keep the medication in its respective labeled
            container.
          </li>
          <li>
            I agree and understand that federal regulations prohibit the return
            of prescribed medications.
          </li>
          <li>
            I agree to contact Blugenix 4-6 weeks into the start of my therapy
            (and every 3 months therafter) to arrange for any follow up blood
            testing and/or and office visit/consultation as required by the
            Blugenix Physician.
          </li>
        </ol>
        <div>
          <h3 className="mb-8 text-sm text-blue-600 dark:text-blue-500">
            If you consent to the release of information and would like access
            to your medical records, please complete the following below.
          </h3>
          <HistoryCheckBox
            {...register('treatmentAgreement', {required: "Required"})}
            name="treatmentAgreement"
            label="Confirm your treatment agreement to complete your Medical History."
          />
          {watchTreatmentAgreement && (
            <div className="col-span-2 flex items-center gap-x-2 pt-4 pb-2">
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

export default AgreementInfo
