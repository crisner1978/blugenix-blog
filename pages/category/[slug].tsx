import { Categories, PostCard } from 'components/blog'
import BlogHeader from 'components/layout/BlogHeader'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getCategories, getCategoryPost } from 'services/queries'
import { Category, Post } from 'typings'
import Loader from "../../components/Loader"

interface Props {
  posts: [Post]
}

const CategoryPage = ({ posts }: Props) => {
  const router = useRouter()
    if(router.isFallback) {
      return <Loader />
    }

    return (
      <div className='dark:text-gray-200 text-gray-700'>
      <BlogHeader title="The Blog" therapy={false} />
      <div className="mx-auto max-w-5xl px-10 min-h-screen">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
              <PostCard key={post.node.id} post={post} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-[70px] lg:mb-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
      </div>
      
    )
  }
  
  export default CategoryPage
  
export const getStaticPaths = async () => {
   const categories = await getCategories()
  
    const paths = categories.map((category: Category) => ({
      params: {
        slug: category.slug,
      },
    }))
  
    return {
      paths,
      fallback: true,
    }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
   const posts = await getCategoryPost(params?.slug)
  
    return {
      props: { posts },
      revalidate: 60,
    }
  }
  

