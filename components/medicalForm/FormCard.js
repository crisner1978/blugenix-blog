import { ChevronLeftIcon } from '@heroicons/react/solid'
import React from 'react'

const FormCard = ({ currStep, prevFormStep, formValues, children }) => {
  
  return (
    <div className='bg-white dark:bg-stone-800 p-8 mb-8 shadow-lg rounded-lg'>
      {currStep < 7 && formValues?.[0]?.patientInfo.sex === "female" ? (
        <div className='flex items-center space-x-4 mb-8'>
          {currStep > 0 && (
            <button onClick={prevFormStep} className='transition-all duration-300 ease hover:scale-110 p-2 bg-pink-600 rounded-full'>
              <ChevronLeftIcon className='h-7 w-7 text-white' />
            </button>

          )}
          <span className='my-3'>Part {currStep + 1} of {formValues[0]?.patientInfo.sex === "female" ? 7 : 6}</span>
        </div>
      ) : currStep < 6 ? (
        <div className='flex items-center space-x-4 mb-8'>
          {currStep > 0 && (
            <button onClick={prevFormStep} className='transition-all duration-300 ease hover:scale-110 p-2 bg-pink-600 rounded-full'>
              <ChevronLeftIcon className='h-7 w-7 text-white' />
            </button>

          )}
          <span className='my-3'>Part {currStep + 1} of {formValues?.[0]?.patientInfo.sex === "female" ? 7 : 6}</span>
        </div>
      ) : (
        null
      )}
      {children}
    </div>
  )
}

export default FormCard