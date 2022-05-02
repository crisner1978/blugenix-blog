import Link from 'next/link'
import { useQuery } from 'react-query'
import { getCategories } from 'services/queries'

const BlogHeader = () => {
  const { data } = useQuery("categories", () => getCategories().then((result) => result))

  return (
    <div className='dark:bg-black bg-white pb-4'>
      <div className='flex justify-between items-end py-3 px-10 mx-auto max-w-5xl'>
      <div className='border-b w-full inline-block border-blue-400 dark:border-blue-600 py-6'>
        <div className='md:float-left block'>
          <Link href="/blog">
            <span className='navLogo cursor-pointer font-semibold text-3xl dark:text-white italic'>
              Blugenix Blog
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {data?.map(({slug, name, id}) => (
            <Link key={id} href={`/category/${slug}`}>
              <span className='cursor-pointer md:float-right mt-2 align-middle ml-4 navLink text-sm'>
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default BlogHeader