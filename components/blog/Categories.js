import Loader from 'components/Loader'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { getCategories, getTherapies } from 'services/queries'

const Categories = ({ therapy }) => {

  const { data } = useQuery("categories", () => {
    return therapy ? getTherapies().then((result) => result) : getCategories().then((result) => result)
  })

  if(!data) return <Loader />

  return (
    <div className='bg-white dark:bg-stone-800 p-8 mb-8 shadow-lg rounded-lg pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {therapy ? "Therapies" : "Categories"}
      </h3>
      {data?.map(({ id, name, slug }) => (
        <Link key={id} href={therapy ? `/therapies/#${slug}` : `/category/${slug}`}>
          <span className='widgets'>
            {name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
