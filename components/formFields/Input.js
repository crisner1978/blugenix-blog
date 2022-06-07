import React from 'react'

const Input = React.forwardRef(
  ({ name, label, type, placeholder, component, onChange, onBlur, errors }, ref) => {
    return (
      <div className="inputWrapper">
        <label className="formLabel" htmlFor={label}>
          {label}
        </label>
        {component ? (
          component
        ) : (
          <input
            onChange={onChange}
            name={name}
            onBlur={onBlur}
            ref={ref}
            className="singleLineInput"
            type={type}
            placeholder={placeholder}
          />
        )}
        {errors && <span className="formErrorMsg">{errors[name]?.message}</span>}
      </div>
    )
  })


export default Input