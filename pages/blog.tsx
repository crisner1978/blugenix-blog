import Head from 'next/head'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import {
  PostCard,
  PostWidget,
  Categories,
  FeaturedPosts,
} from '../components/blog'
import { getPosts } from '../services/queries'
import { Post } from 'typings'

interface Props {
  posts: [Post]
}

const BlogPage = ({ posts }: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white  to-gray-100 text-gray-700 dark:from-black dark:to-slate-900 dark:text-gray-200">
      <Head>
        <title>Blugenix Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Featured Posts */}
      <FeaturedPosts />
      <main className="mx-auto max-w-5xl grid grid-cols-1 gap-12 px-10 lg:grid-cols-12">
        
        {/* Main Feed */}
        <section className="col-span-1 lg:col-span-8">
          {/* Posts */}
          <div>
            {posts.map((post) => (
              <PostCard key={post.node.id} post={post} />
            ))}
          </div>
        </section>
        {/* Feature Posts Categories */}
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-[70px] lg:mb-8">
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </main>
    </div>
  )
}

export default BlogPage

export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}
