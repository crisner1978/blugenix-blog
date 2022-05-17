import React from 'react'

const SelectField = React.forwardRef(({ name, label, items, onChange, onBlur, errors }, ref) => {
  return (
    <div className="inputWrapper">
      <label className="formLabel" htmlFor={label}>
        {label}
      </label>
      <select
        className="singleLineInput w-32 py-[9px]"
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
      >
        {items.map(({ value, optionName }) => (
          <option className="bg-white text-gray-700" value={value} key={value}>
            {optionName}
          </option>
        ))}
      </select>
      {errors && <span className="formErrorMsg">{errors[name]?.message}</span>}
    </div>
  )
})

export default SelectField