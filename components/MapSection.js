import React from 'react'

const MapSection = ({ para_1, component }) => {
  return (
    <section className="bg-white dark:bg-black">
        <div className="py-10 pb-20 max-w-6xl mx-auto px-10 md:pt-28 md:pb-28 md:flex-row items-center md:flex flex flex-col md:gap-5">
          <div className="md:w-1/2 mb-10">
            <p className="font-fancy text-2xl font-medium lg:text-3xl leading-normal md:leading-normal lg:leading-snug xl:leading-normal">
              {para_1}
            </p>
            {component}
          </div>
          <div className="md:w-1/2">
            <img src="images/map.svg" alt="" />
          </div>
        </div>
      </section>
  )
}

export default MapSection