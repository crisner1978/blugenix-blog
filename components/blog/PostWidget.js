import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'
import { getRecentPosts, getSimilarPosts } from 'services/queries'

const PostWidget = ({ categories, slug }) => {
  
  const { data } = useQuery(["posts", slug], () => {
    return slug ? (
      getSimilarPosts(categories, slug).then((result) => result)
    ) : (
      getRecentPosts().then((result) => result)
    )
  })

  return (
    <div className='bg-white dark:bg-stone-800 p-8 mb-8 shadow-lg rounded-lg'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {data?.map((post) => (
        <Link key={post.id} href={`/post/${post.slug}`}>
          <div className='widgets'>
            <div className='w-20 flex-none'>
              <img className='rounded-lg align-middle' src={post.featuredImage.url} alt={post.title} />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 dark:text-gray-100 text-xs'>
                {moment(post.createAt).format('MMM DD, YYYY')}
              </p>
              <p className='text-base'>
                {post.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget
