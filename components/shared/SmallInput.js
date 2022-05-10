import React from 'react'

const SmallInput = React.forwardRef(
  ({ name, label, type, placeholder, onChange, onBlur, errors }, ref) => {
    return (
    <div className="relative sm:w-full text-right">
      <label className="mr-4 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        ref={ref}
        className="numberInput"
        type={type}
        placeholder={placeholder}
      />
      {errors && <span className="formErrorMsg -top-5">{errors[name]?.message}</span>}
    </div>
  )
})

export default SmallInput