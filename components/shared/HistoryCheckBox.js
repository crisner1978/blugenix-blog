import React from 'react'

const HistoryCheckBox = React.forwardRef(({ name, label, onBlur, onChange }, ref) => (
  <div className="flex items-center">
    <input
      ref={ref}
      onBlur={onBlur}
      onChange={onChange}
      type="checkbox"
      name={name}
      id={name}
    />
    <label className="historyForm" htmlFor={name}>
      {label}
    </label>
  </div>
))

export default HistoryCheckBox