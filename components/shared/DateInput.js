import moment from "moment"
import { useState } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller } from "react-hook-form"

const DateInput = ({ label, name, control, disabled, labelStyle, defaultValue }) => {
  const [date, setDate] = useState(new Date())

  return (
    <div className="flex flex-col ">
      <label className={labelStyle} htmlFor={label}>
        {label}
      </label>
      <Controller
        as={DatePicker}
        control={control}
        name={name}
        onChange={([selected]) => selected}
        defaultValue={defaultValue}
        render={({ field }) => (
          <DatePicker
            className="rounded-lg bg-gray-100 py-2 text-center focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-600/50 dark:bg-black/20 
            dark:text-gray-200 dark:placeholder:text-gray-400/60 font-deca outline-none"
            name={name}
            onChange={(date) => {
              field.onChange(date)
              setDate(moment(date).format("L"))
            }}
            disabled={disabled}
            dateFormat="MMMM d, yyyy"
            defaultValue={defaultValue}
            placeholderText={moment(date).format("L")}
          />
        )}
      />
    </div>
  )
}

export default DateInput