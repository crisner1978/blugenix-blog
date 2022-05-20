import React from 'react'

const HistoryCheckBox = React.forwardRef(({ name, label, onBlur, onChange }, ref) => (
  <div className="flex items-center">
    <input
      className='mr-3'
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

// const CheckBox = ({ name, label }) => (
//   <div>
//     <label htmlFor={label}>
//       <input className="mr-1" {...register(name)} type="checkbox" /> {label}
//     </label>
//   </div>
// )

// const RequiredCheckBox = ({ name, label }) => (
//   <div>
//     <label htmlFor={label}>
//       <input
//         className="mr-1"
//         {...register(name, { required: 'REQUIRED' })}
//         type="checkbox"
//       />{' '}
//       {label}
//     </label>
//   </div>
// )