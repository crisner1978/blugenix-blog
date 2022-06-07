import React from 'react'

const TextArea = React.forwardRef(({ name, label, placeholder, onBlur, onChange, rows }, ref) => (
  <div className="inputWrapper">
    <label className="formLabel" htmlFor={name}>
      {label}
    </label>
    <textarea
      ref={ref}
      onBlur={onBlur}
      onChange={onChange}
      className="singleLineInput"
      placeholder={placeholder}
      name={name}
      cols="30"
      rows={rows}
    ></textarea>
  </div>
))

export default TextArea
