import React from 'react'
import { getPostDetails, getPosts } from '../../services/queries'
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comment,
  CommentForm,
} from '../../components/blog'
import { GetStaticProps } from 'next'
import { IPost, Post } from 'typings'
import BlogHeader from 'components/layout/BlogHeader'
import Loader from 'components/Loader'
import { useRouter } from 'next/router'

interface Props {
  post: IPost
}

const PostPage = ({ post }: Props) => {
  const router = useRouter()
    if(router.isFallback) {
      return <Loader />
    }

  return (
    <div className='bg-gradient-to-b from-white  to-gray-100 dark:from-black dark:to-slate-900 dark:text-gray-200 text-gray-700'>
    <BlogHeader />
    <div className="mx-auto max-w-5xl px-10 min-h-screen">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentForm slug={post.slug} id={post.id} />
          <Comment slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-[70px] lg:mb-8">
            <PostWidget categories={post.categories.map((category) => category.slug)} slug={post.slug} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default PostPage

export const getStaticPaths = async () => {
 const posts = await getPosts()

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.node.slug,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
 const data = (await getPostDetails(params?.slug)) || []

 if (!data) {
  return {
    notFound: true,
  }
}

  return {
    props: {
      post: data,
    },
    revalidate: 60,
  }
}
