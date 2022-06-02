import React from 'react'
import { useQuery } from 'react-query'
import { getSymptoms } from 'services/queries'
import FreeButton from './FreeButton'
import { Orbit } from '@uiball/loaders'
import SymptomCard from './SymptomCard'
import Carousel from 'react-multi-carousel'
import LeftArrow from './blog/LeftArrow'
import RightArrow from './blog/RightArrow'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLarge: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

const Symptoms = ({ setOpen }) => {
  const { data: symptoms, isLoading, isSuccess } = useQuery('featured', () =>
    getSymptoms().then((result) => result)
  )
  console.log('symptoms', symptoms)

  return (
    <div className=" lg:pt-0">
      {isLoading ? (
        <div className="md:ml-28">
          <Orbit size={35} speed={1.5} color="black" />
        </div>
      ) : (
          <Carousel
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite
            customLeftArrow={<LeftArrow />}
            customRightArrow={<RightArrow />}
            responsive={responsive}
            carouselstate
            itemClass="px-6"
          >
            {isSuccess && symptoms?.map((symptom) => (
              <SymptomCard
                key={symptom.id}
                item={symptom}
                setOpen={setOpen}
              />
            ))}
          </Carousel>
        
      )}
    </div>
  )
}

export default Symptoms
