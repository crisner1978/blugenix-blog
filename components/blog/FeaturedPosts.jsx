import { useQuery } from 'react-query'
import { getFeaturedPosts } from 'services/queries'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import FeaturedPostCard from './FeaturedPostCard'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const responsive = {
  superLarge: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  }
}

const FeaturedPosts = () => {
  const { data: featuredPosts, isSuccess } = useQuery('featured', () => getFeaturedPosts().then((result) => result))

  const leftarrow = (
    <div className='absolute transition-all duration-300 ease w-12 hover:scale-110 left-0 flex justify-center py-3 cursor-pointer bg-pink-600 rounded-full'>
      <ChevronLeftIcon className='h-6 w-6 text-white' />
    </div>
  )

  const rightarrow = (
    <div className='absolute transition-all duration-300 ease w-12 hover:scale-110 right-0 flex justify-center py-3 cursor-pointer bg-pink-600 rounded-full'>
      <ChevronRightIcon className='w-6 h-6 text-white' />
    </div>
  )
  
  return <div className="mx-auto mb-8 max-w-5xl px-6">
    <Carousel infinite customLeftArrow={leftarrow} customRightArrow={rightarrow} responsive={responsive} arrows={[ChevronLeftIcon, ChevronRightIcon]} itemClass="px-4">
      {isSuccess && featuredPosts.map((post) => (
        <FeaturedPostCard key={post.id} post={post} />
      ))}
    </Carousel>
  </div>
}

export default FeaturedPosts
