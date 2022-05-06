import { ChevronLeftIcon } from '@heroicons/react/solid'


const LeftArrow = ({ onClick, ...rest }) => {
  const { onMove, carouselState: { currentSlide, deviceType } } = rest

  return (
    <div onClick={() => onClick()} className='absolute transition-all duration-300 ease hover:scale-110 left-0 p-3 cursor-pointer bg-pink-600 rounded-full'>
      <ChevronLeftIcon className='h-6 w-6 text-white' />
    </div>
  )
}

export default LeftArrow