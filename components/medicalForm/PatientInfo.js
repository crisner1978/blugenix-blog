import { useForm } from 'react-hook-form'
import { isPossiblePhoneNumber } from 'libphonenumber-js/min'
import { formatPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input/react-hook-form-input'
import 'react-phone-number-input/style.css'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { category } from 'lib/helpers'
import { useFormValueState } from 'atoms/formAtom'

/*


SOCIAL HISTORY:
  Do you smoke? YES OR NO (if yes, how often per day___)
  Do you drink? YES OR NO (if yes, how often per week___)
  Do you exercise regularly? YES OR NO (if yes, how often per week___)

MEDICAL HISTORY: check boxes
  Diagnosed History of Disease: Do YOU currently have or ever had any of the following? If yes, check the box and explain below.
    Heart Attack/Heart Failure
    Renal Disease
    Orthopedic or muscle disorder including fracture or joint disorder
    Allergies to Medications
    Anxiety
    Back Problems/Injuries
    Hypertension
    Cholesterol Problems
    Thyroid Problem
    Liver Disease
    Asthma/COPD 
    Fibromyalgia
    Erectile Dysfunction
    Diabetes
    Cancer
    Anemia
  
  If you checked a box, please explain below:
*/

const PatientInfo = ({ nextFormStep, formStep }) => {
  const [date, setDate] = useState(new Date())
  const [formValues, setFormValues] = useFormValueState()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  
  const RequiredInput = ({ name, label, type, placeholder, component }) => (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={label}>
        {label}
      </label>
      {component ? (
        component
      ) : (
        <input
          {...register(name, { required: 'REQUIRED' })}
          className="singleLineInput"
          type={type}
          placeholder={placeholder}
        />
      )}
      <span className="formErrorMsg">{errors[name]?.message}</span>
    </div>
  )

  const Input = ({ name, label, type, placeholder }) => (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={label}>
        {label}
      </label>
      <input
        {...register(name)}
        className="singleLineInput"
        type={type}
        placeholder={placeholder}
      />
    </div>
  )

  const CheckBox = ({ name, label }) => (
    <div>
      <label htmlFor={label}>
        <input className="mr-1" {...register(name)} type="checkbox" /> {label}
      </label>
    </div>
  )

  const RequiredCheckBox = ({ name, label }) => (
    <div>
      <label htmlFor={label}>
        <input
          className="mr-1"
          {...register(name, { required: 'REQUIRED' })}
          type="checkbox"
        />{' '}
        {label}
      </label>
    </div>
  )

  const RequiredSelect = ({ label, items }) => (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={label}>
        {label}
      </label>
      <select
        {...register(label, { required: 'REQUIRED' })}
        className="singleLineInput py-[9px]"
      >
        {items.map(({ value, optionName }) => (
          <option className="bg-white text-gray-700" value={value} key={value}>
            {optionName}
          </option>
        ))}
      </select>
      <span className="formErrorMsg">{errors[label]?.message}</span>
    </div>
  )

  const RequiredPhoneNumber = ({ label, name, placeholder }) => (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={label}>
        {label}
      </label>
      <PhoneInput
        className="singleLineInput"
        name={name}
        placeholder={placeholder}
        control={control}
        rules={{
          required: 'REQUIRED',
          validate: (value) =>
            isPossiblePhoneNumber(value) || `VALID ${label} IS REQUIRED`,
        }}
        country="US"
      />
      <span className="formErrorMsg">{errors[name]?.message}</span>
    </div>
  )

  const PhoneNumber = ({ label, name, placeholder }) => (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={label}>
        {label}
      </label>
      <PhoneInput
        className="singleLineInput"
        name={name}
        placeholder={placeholder}
        control={control}
        country="US"
      />
    </div>
  )

  const DateInput = ({ label, name }) => (
    <div className="flex items-center">
      <label className="dateFormLabel" htmlFor={label}>
        {label}
      </label>
      <DatePicker
        className="ml-4 w-36 rounded-lg bg-gray-100 py-2 text-center dark:bg-black/20"
        control={control}
        selected={date}
        name={name}
        disabled
      />
    </div>
  )

  const TextArea = ({ name, label, placeholder }) => (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...register(name)}
        className="singleLineInput"
        placeholder={placeholder}
        name={name}
        cols="30"
        rows="3"
      ></textarea>
    </div>
  )

  // List any Allergies

  const PersonalInfo = () => (
    <section className="mb-4">
      <div className="items-center justify-between sm:flex">
        <div className="mr-4 w-full">
          <RequiredInput
            name="name"
            label="Patient Name"
            type="text"
            placeholder="Enter your full name"
          />
        </div>
        <RequiredInput
          name="dob"
          label="DOB"
          type="text"
          placeholder="03/15/1970"
        />
      </div>
      <RequiredInput
        name="address"
        label="Address"
        type="text"
        placeholder="12345 Some Street"
      />
      <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="w-full sm:mr-4">
          <RequiredInput
            name="city"
            label="City"
            type="text"
            placeholder="Your City"
          />
        </div>
        <div className="flex w-full justify-between space-x-4">
          <RequiredSelect label="State" items={category} />
          <RequiredInput
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
            name="phone"
            label="Phone"
            placeholder="561-555-1212"
          />
        </div>
        <div className="w-full sm:ml-2">
          <RequiredInput
            name="email"
            label="Email"
            placeholder="email@provider.com"
          />
        </div>
      </div>
      <div className="items-center justify-between sm:flex">
        <div className="mr-4 w-full">
          <Input
            name="physician"
            label="Primary Doctor Name"
            type="text"
            placeholder="Enter your doctor's name"
          />
        </div>
        <PhoneNumber
          name="doctorsphone"
          label="Doctor's Phone"
          placeholder="561-555-1212"
        />
      </div>
      <Input name="allergies" label="List any Allergies" type="text" placeholder="List any allergies to food, medication, etc. " />
    </section>
  )

  const onSubmit = (data) => {
    setFormValues(data)
    nextFormStep()
  }

  console.log("Recoil formValues",formValues)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 text-gray-700  dark:text-gray-200">
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">
          Patient Information
        </h3>
        <DateInput name="date" label="Date" />
      </div>
      <PersonalInfo />
      <button className='formSubmitBtn w-full' type="submit">Next</button>
    </form>
  )
}

export default PatientInfo
