import Link from 'next/link'
import React from 'react'


const categories = [
  { name: 'Keto-verse', slug: 'ketoverse' },
  { name: 'Testosterone Therapy', slug: 'trt' },
]


const BlogHeader = () => {
  return (
    <div className='flex justify-between items-end py-3 px-10 mx-auto max-w-5xl'>
      <div className='border-b w-full inline-block border-blue-400 dark:border-blue-600 py-8'>
        <div className='md:float-left block'>
          <Link href="/">
            <span className='navLogo cursor-pointer font-semibold text-3xl dark:text-white italic'>
              blog and articles
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map(({slug, name}) => (
            <Link key={slug} href={`/category/${slug}`}>
              <span className='cursor-pointer md:float-right mt-2 align-middle ml-4 navLink text-sm'>
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogHeader