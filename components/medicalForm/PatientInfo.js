import {
  DateInput,
  Input,
  PhoneNumber,
  RequiredPhoneNumber,
  SelectField
} from 'components/shared'
import { category } from 'lib/helpers'
import React from 'react'
import { useForm } from 'react-hook-form'
import 'react-phone-number-input/style.css'


const PatientInfo = ({ formValues, setFormValues, nextFormStep, formStep }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: formValues, mode: 'onBlur' })

  const PersonalInfo = () => (
    <section className="mb-4">
      <div className="items-center justify-between sm:flex">
        <div className="mr-4 w-full">
          <Input
            {...register('name', { required: 'REQUIRED' })}
            errors={errors}
            name="name"
            label="Patient Name"
            type="text"
            placeholder="Enter your full name"
          />
        </div>
        <Input
          {...register('dob', { required: 'REQUIRED' })}
          errors={errors}
          name="dob"
          label="DOB"
          type="text"
          placeholder="03/15/1970"
        />
      </div>
      <Input
        {...register('address', { required: 'REQUIRED' })}
        errors={errors}
        name="address"
        label="Address"
        type="text"
        placeholder="12345 Some Street"
      />
      <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="w-full sm:mr-4">
          <Input
            {...register('city', { required: 'REQUIRED' })}
            errors={errors}
            name="city"
            label="City"
            type="text"
            placeholder="Your City"
          />
        </div>
        <div className="flex w-full justify-between space-x-4">
          <SelectField
            {...register('state', { required: 'REQUIRED' })}
            errors={errors}
            name="state"
            label="State"
            items={category}
          />
          <Input
            {...register('zipcode', { required: 'REQUIRED' })}
            errors={errors}
            name="zipcode"
            label="Zip"
            type="text"
            placeholder="33408"
          />
        </div>
      </div>
      <div className="justify-between sm:flex">
        <div className="w-full sm:mr-2">
          <RequiredPhoneNumber
            control={control}
            errors={errors}
            name="phone"
            label="Phone"
            placeholder="561-555-1212"
          />
        </div>
        <div className="w-full sm:ml-2">
          <Input
            {...register('email', {
              required: 'REQUIRED',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Invalid Email',
              },
            })}
            errors={errors}
            name="email"
            type="text"
            label="Email"
            placeholder="email@provider.com"
          />
        </div>
      </div>
      <div className="items-center justify-between sm:flex">
        <div className="mr-4 w-full">
          <Input
            {...register('physician')}
            name="physician"
            label="Primary Doctor Name"
            type="text"
            placeholder="Enter your doctor's name"
          />
        </div>
        <PhoneNumber
          control={control}
          name="doctorsphone"
          label="Doctor's Phone"
          placeholder="561-555-1212"
        />
      </div>
      <Input
        {...register('allergies')}
        name="allergies"
        label="List any Allergies"
        type="text"
        placeholder="List any allergies to food, medication, etc. "
      />
    </section>
  )

  const onSubmit = (data) => {
    setFormValues(data)
    nextFormStep()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  console.log('Recoil formValues', formValues)
  console.log('formStep', formStep)

  return (
    <form id='patient-info'
      onSubmit={handleSubmit(onSubmit)}
      className={`${formStep === 0 ? 'mb-8 text-gray-700  dark:text-gray-200' : 'hidden'
        }`}
    >
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">
          Patient Information
        </h3>
        <DateInput control={control} name="date" label="Date" />
      </div>
      <PersonalInfo />
      <button className="formSubmitBtn w-full" type="submit">
        Next
      </button>
    </form>
  )
}

export default PatientInfo
