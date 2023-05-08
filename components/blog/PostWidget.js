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
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg dark:bg-stone-800">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {data?.map((post) => (
        <Link key={post.id} href={`/post/${post.slug}`}>
          <div className="widgets">
            <div className="w-20 flex-none">
              <img
                className="rounded-lg align-middle"
                src={post.featuredImage.url}
                alt={post.title}
              />
            </div>
            <div className="ml-4 flex-grow">
              <p className="text-xs text-gray-500 dark:text-gray-100">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="text-base">{post.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget
