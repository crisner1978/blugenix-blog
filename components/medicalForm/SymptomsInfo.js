import { DateInput, HistoryCheckBox } from 'components/shared'
import React from 'react'
import { useForm } from 'react-hook-form'

const SymptomsInfo = ({ setFormValues, formValues, nextFormStep, formStep }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({ mode: "onBlur" })

  const onSubmit = (data) => {
    let info = {
      symptomInfo: data
    }
    setFormValues((oldFormValues) => [...oldFormValues, info])
    nextFormStep()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <form id="history-info"
      onSubmit={handleSubmit(onSubmit)}
      className={`${formStep === 3 ? 'mb-8 text-gray-700  dark:text-gray-200' : 'hidden'
        }`}
    >
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">Symptoms</h3>
        <DateInput control={control} name="date" label="Date" disabled={true} labelStyle="dateFormLabel" />
      </div>
      <section className="mb-7 text-gray-500 dark:text-gray-200">
        <div className="text-sm mb-8 text-blue-600 dark:text-blue-500">
          <h3>Please check the symptoms you hope to have improved through hormone replacement therapy (HRT).</h3>
          <h2 className='uppercase font-semibold '>blugenix and its physicians do not treat patients for athletic performance or enhancement</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 mb-8'>
          <HistoryCheckBox {...register("decreasedDesire")} name="decreasedDesire" label="Decreased desire and ability to exercise" />
          <HistoryCheckBox {...register("decreasedEnergy")} name="decreasedEnergy" label="Decreased energy or endurance" />
          <HistoryCheckBox {...register("decreasedWellBeing")} name="decreasedWellBeing" label="Decreased sense of well being" />
          <HistoryCheckBox {...register("decreasedMemory")} name="decreasedMemory" label="Decreasing memory" />
          <HistoryCheckBox {...register("coldHeatIntolerance")} name="coldHeatIntolerance" label="Cold or heat intolerance" />
          <HistoryCheckBox {...register("stressed")} name="stressed" label="Increasingly stressed" />
          <HistoryCheckBox {...register("lowLibido")} name="lowLibido" label="Loss of interest in sex/low libido" />
          <HistoryCheckBox {...register("decreasedStrength")} name="decreasedStrength" label="Decreasing muscle strength" />
          <HistoryCheckBox {...register("lossConcentration")} name="lossConcentration" label="Loss of concentration, sociability, activity" />
          <HistoryCheckBox {...register("depression")} name="depression" label="Depression" />
          <HistoryCheckBox {...register("difficultySleeping")} name="difficultySleeping" label="Difficulty sleeping" />
          <HistoryCheckBox {...register("hotFlashes")} name="hotFlashes" label="Hot flashes" />
          <HistoryCheckBox {...register("increasingFat")} name="increasingFat" label="Increased fat deposits abdomen and/or thighs" />
          <HistoryCheckBox {...register("muscleLoss")} name="muscleLoss" label="Muscle loss" />
          <HistoryCheckBox {...register("hairLoss")} name="hairLoss" label="Thinning or loss of hair" />
          <HistoryCheckBox {...register("migraines")} name="migraines" label="Headaches/Migraines" />
          <HistoryCheckBox {...register("unexplainedWeightLoss")} name="unexplainedWeightLoss" label="Weight loss - unexplained" />
          <HistoryCheckBox {...register("pregnant")} name="pregnant" label="Currently pregnant" />
          <div className='text-sm flex items-center space-x-2'>
            <label className='py-2' htmlFor="otherSymptom">Other?</label>
            <input {...register("otherSymptom")} className='singleLineInput mb-0' type="text" placeholder='symptom not listed' />
          </div>
        </div>
      </section>
      <button className="formSubmitBtn w-full" type="submit">
        Next
      </button>
    </form>
  )
}

export default SymptomsInfo