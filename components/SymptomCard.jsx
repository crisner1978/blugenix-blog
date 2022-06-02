import React from 'react'
import { useQuery } from 'react-query'
import { getSymptoms } from 'services/queries'
import FreeButton from './FreeButton'

const SymptomCard = ({ setOpen }) => {
  const { data: symptoms, isSuccess } = useQuery('featured', () =>
    getSymptoms().then((result) => result)
  )
  console.log("symptoms", symptoms)

  return (
    <div className="pt-10 md:pt-0">
      <h1 className="navLogoActive mb-1 inline-block w-full text-center font-bold uppercase tracking-wide xl:text-lg">
        High Body Fat
      </h1>
      <div className="cursor-pointer overflow-hidden rounded-3xl border shadow-lg">
        <img
          className="w-full object-cover transition-transform duration-200 ease-in-out hover:scale-105"
          src="https://res.cloudinary.com/dtram9qiy/image/upload/v1654128487/my-upload/z0dix7y1f6145upymozz.jpg"
          alt=""
        />

        <div className="bg-white p-5 mb-3">
          <p className="pt-1 text-gray-700 sm:text-lg">
            Looking to decrease your body fat percentage and tighten up your
            body?
          </p>
          <FreeButton
            tw="md:hidden text-center md:text-left md:-ml-4 text-white dark:text-gray-200 mt-8"
            text="Live your best"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default SymptomCard
