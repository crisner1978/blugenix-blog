import { DateInput, HistoryCheckBox, QuestionCheckBox, SelectField, SmallInput } from 'components/shared'
import React from 'react'
import { useForm } from 'react-hook-form'

const FemaleInfo = ({ setFormValues, formValues, nextFormStep, formStep }) => {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({ defaultValues: formValues, mode: "onBlur" })
  const watchHysterectomy = watch("hysterectomySurgery")

  const onSubmit = (data) => {
    setFormValues(data)
    nextFormStep()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    console.log("female info", data)
  }

  return (
    <form id="history-info"
      onSubmit={handleSubmit(onSubmit)}
      className={`${formStep === 4 ? 'mb-8 text-gray-700  dark:text-gray-200' : 'hidden'
        }`}
    >
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">Female Specific Symptoms</h3>
        <DateInput control={control} name="date" label="Date" disabled={true} labelStyle="dateFormLabel" />
      </div>
      <section className="mb-7 text-gray-500 dark:text-gray-200">
        <div className="text-sm mb-8 text-blue-700 dark:text-blue-500">
          <h3>Symptoms/Past Diagnosis: Please check all that apply.</h3>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 mb-8'>
          <HistoryCheckBox {...register("fibromyalgia")} name="fibromyalgia" label="Fibromyalgia" />
          <HistoryCheckBox {...register("migraines")} name="migraines" label="Migraines" />
          <HistoryCheckBox {...register("ovarianCysts")} name="ovarianCysts" label="Ovarian Cysts" />
          <HistoryCheckBox {...register("osteoporosis/osteopenia")} name="osteoporosis/osteopenia" label="Osteoporosis/Osteopenia" />
          <HistoryCheckBox {...register("uterineFibroids")} name="uterineFibroids" label="Uterine Fibroids" />
          <HistoryCheckBox {...register("hotFlashes")} name="hotFlashes" label="Hot Flashes" />
          <HistoryCheckBox {...register("nightSweats")} name="nightSweats" label="Night Sweats" />
          <HistoryCheckBox {...register("vaginalDryness")} name="vaginalDryness" label="Vaginal Dryness" />
          <HistoryCheckBox {...register("drySkin")} name="drySkin" label="Dry Skin" />
          <HistoryCheckBox {...register("dryHair")} name="dryHair" label="Dry Hair" />
          <HistoryCheckBox {...register("moodSwings")} name="moodSwings" label="Mood Swings" />
          <HistoryCheckBox {...register("breastTenderness")} name="breastTenderness" label="Breast Tenderness" />
          <HistoryCheckBox {...register("waterRetention")} name="waterRetention" label="Water Retention" />
        </div>
        
        <QuestionCheckBox {...register("hysterectomySurgery")} name="hysterectomySurgery" label="Have you ever had a Hysterectomy?" />
        {watchHysterectomy && (
          
          <div className='flex justify-between items-center'>
          <DateInput control={control} name="hysterectomy" label="Date" />
          <SelectField 
           {...register('hysterectomyType', { required: 'REQUIRED' })}
           errors={errors}
           name="hysterectomyType"
           label="Type"
           items={[{optionName: "-Select-", value: ""},{optionName: "Partial", value:"partial"}, {optionName:"Full", value:"full"}]}
          />
          </div>
          
        )}
      </section>
      <button className="formSubmitBtn w-full" type="submit">
        Next
      </button>
    </form>
  )
}

export default FemaleInfo