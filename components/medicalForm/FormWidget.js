import { ChevronLeftIcon } from '@heroicons/react/solid'
import React from 'react'

const FormWidget = ({ setFormStarted, prevFormStep, currStep }) => {
  return (
    <div className="bg-white dark:bg-stone-800 p-8 mb-8 shadow-lg rounded-lg">
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Form Status</h3>
      <div className='flex items-center space-x-4'>
        {currStep > 0 && (
          <button onClick={prevFormStep} className='transition-all duration-300 ease hover:scale-110 p-2 bg-pink-600 rounded-full'>
            <ChevronLeftIcon className='h-7 w-7 text-white' />
          </button>
          
        )}
        <p>Part {currStep + 1} of 5</p>
        </div>
      <div>
        <button className='widgets' onClick={() => setFormStarted(false)}>Cancel/Reset</button>
      </div>
    </div>
  )
}

export default FormWidget