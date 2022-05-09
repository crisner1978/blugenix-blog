import moment from "moment"
import { useState } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller } from "react-hook-form"

const DateInput = ({ label, name, control }) => {
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
            disabled
          />
        )}
      />

    </div>
  )
}

export default DateInput