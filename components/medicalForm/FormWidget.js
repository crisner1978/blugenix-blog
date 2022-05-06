import { ChevronLeftIcon } from '@heroicons/react/solid'
import React from 'react'

const FormWidget = ({ setFormStart, prevFormStep, currStep }) => {
  return (
    <div className="bg-white dark:bg-stone-800 p-8 mb-8 shadow-lg rounded-lg">
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Form Status</h3>
        <span className='widgets'>Part {currStep + 1} of 5</span>
        <button className='widgets' onClick={() => setFormStart(false)}>Cancel/Reset</button>
    </div>
  )
}

export default FormWidget