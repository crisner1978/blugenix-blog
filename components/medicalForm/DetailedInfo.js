import DateInput from "../shared/DateInput"
import { useForm } from "react-hook-form"
import { TextArea } from "components/shared"


const DetailedInfo = ({ setFormValues, formValues, nextFormStep, formStep }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: formValues })

  const onSubmit = () => {

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${formStep === 2 ? "mb-8 text-gray-700  dark:text-gray-200" : "hidden"}`}>
      <div className="mb-8 items-center justify-between space-y-1 border-b pb-4 sm:flex sm:space-y-0">
        <h3 className="text-xl font-semibold sm:text-2xl">
          History Details
        </h3>
        <DateInput control={control} name="date" label="Date" />
      </div>
      <div className="mb-7 space-y-4">
        <TextArea name="hospitalizations" label="List ALL hospitalizations/surgeries that you've had performed:" rows={2} />
        <TextArea name="medications" label="List ALL medications you are currently taking:" rows={2} />
        <TextArea name="vitamins" label="List ALL vitamin/mineral supplements(including OTC) you are taking:" rows={2} />
      </div>
      <button className='formSubmitBtn w-full' type="submit">Next</button>
    </form>
  )
}

export default DetailedInfo