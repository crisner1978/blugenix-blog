import Head from 'next/head'
import { GetStaticProps } from 'next'
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
    <div className="min-h-screen">
      <Head>
        <title>Blugenix Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Featured Posts */}
      <FeaturedPosts />
      <main className="mx-auto max-w-6xl grid grid-cols-1 lg:gap-12 px-10 lg:grid-cols-12">
        
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
            <Categories therapy={undefined} handleClick={undefined} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}
