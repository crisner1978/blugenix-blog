import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidget, Categories } from '../components'

const posts = [
  { title: 'Testosterone', excerpt: 'Test therapy with the doctor' },
  { title: 'Testosterone', excerpt: 'Test therapy with the doctor' },
]

const BlogPage: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Blugenix Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-1 gap-12 lg:grid-cols-12 max-w-5xl mx-auto px-10">
        {/* Main Feed */}
        <section className="col-span-1 lg:col-span-8">
          {/* Posts */}
          <div>
            {posts.map((post) => (
              <PostCard key={post.title} post={post} />
            ))}
          </div>
        </section>
        {/* Feature Posts Categories */}
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
          </div>
        </div>
      </main>
    </div>
  )
}

export default BlogPage
