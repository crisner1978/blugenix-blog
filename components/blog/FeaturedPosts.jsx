import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useQuery } from 'react-query'
import { getFeaturedPosts } from 'services/queries'
import FeaturedPostCard from './FeaturedPostCard'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

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
  },
}

const FeaturedPosts = () => {
  const { data: featuredPosts, isSuccess } = useQuery('featured', () =>
    getFeaturedPosts().then((result) => result)
  )

  return (
    <div className="mx-auto mb-8 max-w-6xl px-6">
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        responsive={responsive}
        carouselstate
        itemClass="px-4"
      >
        {isSuccess &&
          featuredPosts.map((post) => (
            <FeaturedPostCard key={post.id} post={post} />
          ))}
      </Carousel>
    </div>
  )
}

export default FeaturedPosts
