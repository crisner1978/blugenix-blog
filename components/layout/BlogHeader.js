import Link from 'next/link'
import { useQuery } from 'react-query'
import { getCategories } from 'services/queries'

const BlogHeader = ({ title, therapy }) => {
  const { data } = useQuery('categories', () =>
    getCategories().then((result) => result)
  )

  return (
    <div className=" bg-transparent pb-4" >
      <div className="mx-auto flex max-w-6xl items-end justify-between my-3 px-10">
        <div className="inline-block w-full border-b border-blue-400 py-6 dark:border-blue-600">
          <div className="block md:float-left">
            <Link href={therapy === false ? "/blog" : "/therapies"}>
              <span className="navLogo cursor-pointer text-3xl font-semibold italic dark:text-white">
                {title}
              </span>
            </Link>
          </div>
          <ul className="hidden md:float-left md:contents">
            {data?.map(({ slug, name, id }) =>
              therapy === false ? (
                <Link key={id} href={`/category/${slug}`}>
                  <span className="navLink mt-2 ml-4 cursor-pointer align-middle text-sm md:float-right">
                    {name}
                  </span>
                </Link>
              ) : (
                <li key={id} >
                  <span className="navLink mt-2 ml-4 cursor-pointer align-middle text-sm md:float-right">
                    {name}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader
