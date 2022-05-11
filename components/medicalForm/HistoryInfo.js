import { DateInput, HistoryCheckBox, QuestionCheckBox, SmallInput, TextArea } from 'components/shared'
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
    setFormValues(data)
    nextFormStep()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }



  const SocialHistory = () => (
    <section className="mb-4 text-gray-500 dark:text-gray-200">
      <h3 className="mb-1 text-sm text-blue-700 dark:text-blue-500">
        Check any box that applies.
      </h3>
      <div className="sm:flex items-center">
        <QuestionCheckBox {...register("drink")} name="drink" label="Do you Drink?" />
        {watchDriink && (
          <SmallInput
            {...register('numberDrink', { required: 'REQUIRED' })}
            label="Times per week"
            type="number"
            name="numberDrink"
            placeholder="3"
            errors={errors}
          />
        )}
      </div>
      <div className="items-center sm:flex">
        <QuestionCheckBox {...register("smoke")} name="smoke" label="Do you Smoke?" />
        {watchSmoke && (
          <SmallInput
            {...register('numberSmoke', { required: 'REQUIRED' })}
            label="Times per day"
            type="number"
            name="numberSmoke"
            placeholder="12"
            errors={errors}
          />
        )}
      </div>
      <div className="sm:flex items-center">
        <QuestionCheckBox {...register("exercise")} name="exercise" label="Do you Exercise?" />
        {watchExercise && (
          <SmallInput
            {...register('numberExercise', { required: 'REQUIRED' })}
            label="Times per week"
            type="number"
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
      <h3 className="mb-4 text-sm text-blue-700 dark:text-blue-500">
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
      <TextArea {...register("medicalHistory")} rows={5} name="medicalHistory" label="Explaination of checked boxes" placeholder="If you checked a box, please explain the checked box below:" />
    </section>
  )

  const FamilyHistory = () => (
    <section className="mb-7 text-gray-500 dark:text-gray-200">
      <h3 className="mb-4 text-sm text-blue-700 dark:text-blue-500">
        Check any box that applies.
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 mb-8'>
        {/* Left Side */}
        <HistoryCheckBox {...register("stroke")} name="stroke" label="Stroke" />
        <HistoryCheckBox {...register("heartAttack")} name="heartAttack" label="Heart Attack" />
        <HistoryCheckBox {...register("heartDisease")} name="heartDisease" label="Heart Disease" />
        <HistoryCheckBox {...register("highBP")} name="highBP" label="High Blood Pressure" />
        <HistoryCheckBox {...register("diabetes")} name="diabetes" label="Diabetes" />
        <HistoryCheckBox {...register("highCholesterol")} name="highCholesterol" label="High Cholesterol" />
        <HistoryCheckBox {...register("osteoporosis")} name="osteoporosis" label="Osteoporosis" />
        <HistoryCheckBox {...register("anemia")} name="anemia" label="Anemia" />

        {/* Right Side */}
        <HistoryCheckBox {...register("thyroidDisease")} name="thyroidDisease" label="Thyroid Disease" />
        <HistoryCheckBox {...register("cancer")} name="cancer" label="Cancer" />
        <div className='flex items-center gap-x-2 col-span-2 pt-4'>
          <label className='py-2 nowrap whitespace-nowrap text-sm' htmlFor="other">Other (specify)</label>
          <input className='singleLineInput mb-0' type="text" placeholder='Family disease not listed' />
        </div>
      </div>
    </section>
  )

  return (
    <form id="history-info"
      onSubmit={handleSubmit(onSubmit)}
      className={`${formStep === 1 ? 'mb-8 text-gray-700  dark:text-gray-200' : 'hidden'
        }`}
    >
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">Social History</h3>
        <DateInput control={control} name="date" label="Date" disabled={true} labelStyle="dateFormLabel" />
      </div>
      <SocialHistory />
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">Medical History</h3>
      </div>
      <MedicalHistory />
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">Family History</h3>
      </div>
      <FamilyHistory />
      <button className="formSubmitBtn w-full" type="submit">
        Next
      </button>
    </form>
  )
}

export default HistoryInfo