import { DateInput } from 'components/shared'
import React from 'react'
import { useForm } from 'react-hook-form'

const AgreementInfo = ({ setFormValues, formValues, nextFormStep, formStep }) => {
  const { register, handleSubmit, control } = useForm({ defaultValues: formValues })

  console.log("formValues DetailedInfo", formValues)

  const onSubmit = (data) => {
    setFormValues(data)
    nextFormStep()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <form id="detail-info" onSubmit={handleSubmit(onSubmit)} className={`${formValues?.sex === "female" && formStep === 6 ? "mb-8 text-gray-700  dark:text-gray-200" : 
    formStep === 5 ? "mb-8 text-gray-700  dark:text-gray-200" : "hidden"}`}>
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">
          Treatment Agreement
        </h3>
        <DateInput control={control} name="date" label="Date" disabled={true} labelStyle="dateFormLabel" />
      </div>
      <div className="mb-7 space-y-2">
        <h1>I am the Agreement Info.</h1>
      </div>
      <button className='formSubmitBtn w-full' type="submit">Next</button>
    </form>
  )
}

export default AgreementInfo