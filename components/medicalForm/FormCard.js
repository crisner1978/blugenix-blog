import { ChevronLeftIcon } from '@heroicons/react/solid'
import React from 'react'

const FormCard = ({ currStep, prevFormStep, children }) => {
  return (
    <div className='bg-white dark:bg-stone-800 p-8 mb-8 shadow-lg rounded-lg'>
      {currStep < 5 && (
        <div className='flex items-center space-x-4'>
        {currStep > 0 && (
          <button onClick={prevFormStep} className='transition-all duration-300 ease hover:scale-110 p-2 bg-pink-600 rounded-full'>
            <ChevronLeftIcon className='h-7 w-7 text-white' />
          </button>
          
        )}
        <span>Part {currStep + 1} of 5</span>
        </div>
      )}
      {children}
    </div>
  )
}

export default FormCard