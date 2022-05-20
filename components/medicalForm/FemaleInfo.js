import { DateInput, HistoryCheckBox, Input, QuestionCheckBox, SelectField, SmallInput, TextArea } from 'components/shared'
import React from 'react'
import { useForm } from 'react-hook-form'

const FemaleInfo = ({ setFormValues, formValues, nextFormStep, formStep }) => {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({ mode: "onBlur" })
  const watchHysterectomy = watch("hysterectomySurgery")
  const watchMenstralChange = watch("menstralChange")
  const watchTubalLigation = watch("tubalLigation")

  const onSubmit = (data) => {
    let info = {
      femaleInfo: data
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
      className={`${formStep === 4 ? 'mb-8 text-gray-700  dark:text-gray-200' : 'hidden'
        }`}
    >
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">Female Specific Symptoms</h3>
        <DateInput control={control} name="date" label="Date" disabled={true} labelStyle="dateFormLabel" />
      </div>
      <section className="mb-7 text-gray-500 dark:text-gray-200">
        <div className="text-sm mb-8 text-blue-600 dark:text-blue-500">
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
        {watchHysterectomy ? (
          <div className='sm:flex sm:space-x-4 space-y-2 sm:space-y-0'>
            <DateInput control={control} name="hysterectomyDate" label="Date" labelStyle="formLabel" />
            <SelectField
              {...register('hysterectomyType', { required: 'REQUIRED' })}
              errors={errors}
              name="hysterectomyType"
              label="Type"
              items={[{ optionName: "-Select-", value: "" }, { optionName: "Partial", value: "partial" }, { optionName: "Full", value: "full" }]}
            />
            <div className='sm:w-3/5 sm:ml-4'>
              <Input {...register('hysterectomyReason')} name="hysterectomyReason" label="Reason" type="text" placeholder="Why did you have a hysterectomy?" errors={errors} />
            </div>

          </div>
        ) : (
          <>
            <div className='sm:flex items-end justify-between gap-x-4 col-span-2 pt-2'>
              <p className='pb-4  text-sm' htmlFor="other">If no, give date of your last menstral period</p>
              <DateInput control={control} name="menstralCycleDate" label="Date" labelStyle="formLabel" />
            </div>
            <div className='py-4'>
              <QuestionCheckBox {...register("menstralChange")} name="menstralChange" label="Has it changed from its normal cycle?" />
              {watchMenstralChange && (
                <div className='space-y-2 col-span-2 pt-4'>
                  <label className='py-2 nowrap text-sm' htmlFor="menstralChangedHow">How has it changed? (Ex. Heavier, lighter, longer, shorter)</label>
                  <input {...register("menstralChangedHow")} name="menstralChangedHow" className='singleLineInput mb-0' type="text" placeholder='Family disease not listed...' />
                </div>
              )}
            </div>
          </>
        )}
        <div className='sm:flex items-center py-1 space-y-'>
          <QuestionCheckBox {...register("tubalLigation")} name="tubalLigation" label="Tubal ligation?" />
          {watchTubalLigation && (
            <div className='sm:-mt-2'>
              <DateInput control={control} name="tubalLigationDate" label="Date" labelStyle="formLabel" />
            </div>
          )}
        </div>
        <div className="mb-2 mt-7 space-y-2">
          <TextArea {...register("hormoneMeds")} name="hormoneMeds" label="List any prescription hormone medications you have taken, and for how long." rows={2} />
          <TextArea {...register("femaleCancer")} name="femaleCancer" label="List any family members who have a history of breast, uterine, ovarian or cervical cancer." rows={2} />
          <TextArea {...register("mammograms")} name="mammograms" label="Provide date and details about any abnormal mammograms you may have had." rows={2} />
          <TextArea {...register("papSmear")} name="papSmear" label="Provide date and details about any abnormal Pap Smear tests you may have had." rows={2} />
        </div>
        <div className="justify-between sm:flex">
          <div className="w-full sm:mr-2">
            <Input
              {...register('givenBirth')}
              errors={errors}
              name="givenBirth"
              type="text"
              label="How many times have you given birth?"
              placeholder="how many..."
            />
          </div>
          <div className="w-full sm:ml-2">
            <Input
              {...register('miscarriages')}
              errors={errors}
              name="miscarriages"
              type="text"
              label="How many miscarriages, if any?"
              placeholder="one..."
            />
          </div>
        </div>
        <div className="w-full">
          <Input
            {...register('currentlyPregnant')}
            errors={errors}
            name="currentlyPregnant"
            type="text"
            label="Are you currently pregnant?"
            placeholder="yes or no..."
          />
        </div>
        <div className="w-full">
          <Input
            {...register('anythingElseFemale')}
            errors={errors}
            name="anythingElseFemale"
            type="text"
            label="Is there anything else we didn't ask you that you would like us to know?"
            placeholder="let us know..."
          />
        </div>
      </section>
      <button className="formSubmitBtn w-full" type="submit">
        Next
      </button>
    </form>
  )
}

export default FemaleInfo