import React from 'react'
import { Post } from '../typings'

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.excerpt}</p>
    </div>
  )
}

export default PostCard