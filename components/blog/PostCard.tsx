import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { Post } from '../../typings'

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  const newpost = post.node

  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg dark:bg-stone-800">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg"
          src={newpost.featuredImage.url}
          alt={newpost.title}
        />
      </div>

      <h1
        className="mx-auto mb-8 max-w-fit cursor-pointer text-center text-2xl font-semibold transition
      duration-300 hover:text-pink-500 dark:text-gray-100 dark:hover:text-pink-500 sm:text-3xl"
      >
        <Link href={`/post/${newpost.slug}`}>{newpost.title}</Link>
      </h1>

      {/* Author block */}
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="flex items-center justify-center space-x-2 px-3">
          {newpost.author.photo?.url && (
            <img
              className="h-10 w-10 rounded-full"
              src={newpost.author.photo.url}
              alt={newpost.author.name}
              loading="lazy"
            />
          )}
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="font-semibold text-blue-600">
              {newpost.author.name}
            </span>{' '}
            - Published at {moment(newpost.createdAt).format('MMM DD, YYYY')}
          </p>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-xl px-4 text-center font-deca text-lg text-gray-700 dark:text-gray-100">
        {newpost.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${newpost.slug}`}>
          <span className="inline-block transform cursor-pointer rounded-full bg-pink-500 px-8 py-3 font-fancy text-lg font-medium text-white transition duration-500 hover:-translate-y-1 dark:bg-pink-700 dark:text-gray-200">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
