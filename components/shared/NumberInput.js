import React from 'react'

const NumberInput = React.forwardRef(
  ({ name, label, placeholder, onChange, onBlur, errors }, ref) => {
    return (
    <div className="mb-3 relative sm:w-full text-right">
      <label className="mr-4" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        ref={ref}
        className="numberInput"
        type="number"
        placeholder={placeholder}
      />
      {errors && <span className="formErrorMsg -top-5">{errors[name]?.message}</span>}
    </div>
  )
})

export default NumberInput