import Link from 'next/link'
import { useQuery } from 'react-query'
import { getCategories, getTherapies } from 'services/queries'

const BlogHeader = ({ title, therapy }) => {
  const { data } = useQuery(['categories', therapy], () => {
    return therapy
      ? getTherapies().then((result) => result)
      : getCategories().then((result) => result)
  })
  console.log('data', data)

  return (
    <div className=" bg-transparent pb-4">
      <div className="mx-auto my-3 flex max-w-6xl items-end justify-between px-10">
        <div className="w-full border-b border-blue-400 py-6 dark:border-blue-600 flex justify-between">
          <div className="block md:float-left">
            <Link href={therapy ? '/therapies' : '/blog'}>
              <span className="navLogo cursor-pointer text-3xl font-semibold italic dark:text-white">
                {title}
              </span>
            </Link>
          </div>
          <ul className="hidden md:float-left md:flex">
            {data?.map(({ slug, name, id }) =>
              therapy ? (
                <Link key={id} href={`/therapies/#${slug}`}>
                  <span id={slug} className="navLink mt-2 ml-4 cursor-pointer align-middle text-sm md:float-right">
                    {name}
                  </span>
                </Link>
              ) : (
                <Link key={id} href={`/category/${slug}`}>
                  <span className="navLink mt-2 ml-4 cursor-pointer align-middle text-sm md:float-right">
                    {name}
                  </span>
                </Link>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader
