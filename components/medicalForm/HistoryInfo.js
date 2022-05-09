import { DateInput, HistoryCheckBox, NumberInput, TextArea } from 'components/shared'
import { useForm } from 'react-hook-form'

const HistoryInfo = ({ setFormValues, formValues, nextFormStep, formStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ defaultValues: formValues, mode: 'onBlur' })

  const watchSmoke = watch('smoke')
  const watchDriink = watch('drink')
  const watchExercise = watch('exercise')

  const onSubmit = (data) => {
    console.log('data', data)
    nextFormStep()
  }

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

  const CheckBox = ({ name, label }) => (
    <div className="mb-3 flex w-full items-center py-2">
      <label className="cursor-pointer" htmlFor={name}>
        {label}
      </label>
      <input
        className="ml-4 "
        {...register(name)}
        type="checkbox"
        name={name}
        id={name}
      />
    </div>
  )

  const SocialHistory = () => (
    <section className="mb-4 text-gray-500 dark:text-gray-200">
      <h3 className="mb-8 text-sm text-blue-700 dark:text-blue-500">
        Check any box that applies.
      </h3>
      <div className="pb-2 sm:flex">
        <CheckBox name="drink" label="Do you Drink?" />
        {watchDriink && (
          <NumberInput
            {...register('numberDrink', { required: 'REQUIRED' })}
            label="Times per week"
            name="numberDrink"
            placeholder="3"
            errors={errors}
          />
        )}
      </div>
      <div className="items-center justify-between py-2 sm:flex">
        <CheckBox name="smoke" label="Do you Smoke?" />
        {watchSmoke && (
          <NumberInput
            {...register('numberSmoke', { required: 'REQUIRED' })}
            label="Times per day"
            name="numberSmoke"
            placeholder="12"
            errors={errors}
          />
        )}
      </div>
      <div className="py-2 sm:flex">
        <CheckBox name="exercise" label="Do you Exercise?" />
        {watchExercise && (
          <NumberInput
            {...register('numberExercise', { required: 'REQUIRED' })}
            label="Times per week"
            name="numberExercise"
            placeholder="6"
            errors={errors}
          />
        )}
      </div>
    </section>
  )

  const MedicalHistory = () => (
    <section className="mb-7 text-gray-500 dark:text-gray-200">
      <h3 className="mb-8 text-sm text-blue-700 dark:text-blue-500">
        Diagnosed History of Disease: Do YOU currently have or ever had any of
        the following? If yes, check the box and explain below.
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 mb-8'>
        {/* Left Side */}
        <HistoryCheckBox {...register("heart")} name="heart" label="Heart Attack/Heart Failure" />
        <HistoryCheckBox {...register("renal")} name="renal" label="Renal Disease" />
        <HistoryCheckBox {...register("ortho")} name="ortho" label="Orthopedic or muscle disorder including fracture or joint disorder" />
        <HistoryCheckBox {...register("allergies")} name="allergies" label="Allergies to Medications" />
        <HistoryCheckBox {...register("anxiety")} name="anxiety" label="Anxiety" />
        <HistoryCheckBox {...register("back")} name="back" label="Back Problems/Injuries" />
        <HistoryCheckBox {...register("hypertension")} name="hypertension" label="Hypertension" />
        <HistoryCheckBox {...register("cholesterol")} name="cholesterol" label="Cholesterol Problems" />

        {/* Right Side */}
        <HistoryCheckBox {...register("thyroid")} name="thyroid" label="Thyroid Problems" />
        <HistoryCheckBox {...register("liver")} name="liver" label="Liver Disease" />
        <HistoryCheckBox {...register("asthma")} name="asthma" label="Asthma/COPD" />
        <HistoryCheckBox {...register("fibromyalgia")} name="fibromyalgia" label="Fibromyalgia" />
        <HistoryCheckBox {...register("ed")} name="ed" label="Erectile Dysfunction" />
        <HistoryCheckBox {...register("diabetes")} name="diabetes" label="Diabetes" />
        <HistoryCheckBox {...register("cancer")} name="cancer" label="Cancer" />
        <HistoryCheckBox {...register("anemia")} name="anemia" label="Anemia" />
      </div>
      <TextArea {...register("medicalHistory")} rows={5} name="medicalHistory" label="Explaination of checked boxes" placeholder="If you checked a box, please explain the checked box below:"  />
    </section>
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        formStep === 1 ? 'mb-8 text-gray-700  dark:text-gray-200' : 'hidden'
      }`}
    >
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">Social History</h3>
        <DateInput control={control} name="date" label="Date" />
      </div>
      <SocialHistory />
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">Medical History</h3>
      </div>
      <MedicalHistory />
      <button className="formSubmitBtn w-full" type="submit">
        Next
      </button>
    </form>
  )
}

export default HistoryInfo

{
  /* <div className="items-center justify-between sm:flex">
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
      </div>
      <div className="justify-between sm:flex">
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
      </div>
      <Input name="allergies" label="List any Allergies" type="text" placeholder="List any allergies to food, medication, etc. " /> */
}
