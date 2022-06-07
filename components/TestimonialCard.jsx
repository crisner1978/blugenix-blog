import React from 'react'
import PageDivider from './PageDivider'

const TestimonialCard = ({ date, image, info, name, index }) => {
  console.log("index", index)
  return (
    // {`${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} py-12 items-center md:flex flex flex-col-reverse max-w-6xl mx-auto md:gap-12 px-10`}
    <div className={`${index % 2 === 0 ? "md:flex items-center" : "md:flex flex-row-reverse items-center" } gap-12 px-5`}>
      {/* Image */}
      <div className="rounded-3xl md:max-w-sm">
        <img
          className="rounded-3xl shadow-lg"
          src={image}
          alt=""
        />
      </div>
      {/* Name and Message */}
      <div className='space-y-4 mt-4'>
        <p className='sm:text-lg dark:text-gray-300 text-gray-700'>
          {info}
        </p>
        <p className='inline-block uppercase font-medium sm:text-lg tracking-wide text-gray-500 dark:text-gray-300 w-full'>
          {name}<span>{date ? `Date: ${date}` : null}</span>
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
