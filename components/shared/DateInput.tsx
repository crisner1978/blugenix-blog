import moment from "moment"
import { useState } from "react"
import DatePicker, { ReactDatePicker } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Control, Controller, FieldValues } from "react-hook-form"

interface Props {
  label: string
  name: string
  control: Control
}

const DateInput = ({ label, name, control }: Props) => {
  const [date, setDate] = useState(new Date())

  return (
    <div className="flex items-center">
      <label className="dateFormLabel" htmlFor={label}>
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        defaultValue={moment(date).format("L")}
        render={({ field }) => (
          <DatePicker
            className="ml-4 w-36 rounded-lg bg-gray-100 py-2 text-center dark:bg-black/20"
            value={moment(date).format("L")}
            name={name}
            onChange={() => setDate(date)}
            disabled
          />
        )}
      />

    </div>
  )
}

export default DateInput