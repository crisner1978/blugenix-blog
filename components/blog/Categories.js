import Link from 'next/link'
import { useQuery } from 'react-query'
import { getCategories } from 'services/queries'

const Categories = () => {
  
  const { data } = useQuery("categories", () => getCategories().then((result) => result))

  return (
    <div className='bg-white dark:bg-stone-800 p-8 mb-8 shadow-lg rounded-lg pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {data?.map(({id, name, slug}) => (
        <Link key={id} href={`/category/${slug}`}>
          <span className='widgets'>
            {name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
