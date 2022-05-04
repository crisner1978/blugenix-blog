import { ChevronRightIcon } from '@heroicons/react/solid'

const RightArrow = ({ onClick, ...rest }) => {
  const { onMove, carouselState: { currentSlide, deviceType } } = rest

  return (
    <div onClick={() => onClick()} className='absolute transition-all duration-300 ease w-12 hover:scale-110 right-0 flex justify-center py-3 cursor-pointer bg-pink-600 rounded-full'>
      <ChevronRightIcon className='w-6 h-6 text-white' />
    </div>
  )
}

export default RightArrow