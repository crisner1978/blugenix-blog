import React from 'react'

const QuestionCheckBox = React.forwardRef(({ name, label, onChange, onBlur }, ref) => (
    <div className="mb-2 flex w-full items-center py-2">
      <label className="cursor-pointer text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        className="ml-4"
        type="checkbox"
        name={name}
        id={name}
      />
    </div>
  ))

export default QuestionCheckBox