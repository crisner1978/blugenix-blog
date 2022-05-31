import Loader from 'components/Loader'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { getCategories, getTherapies } from 'services/queries'

const Categories = ({ therapy, handleClick }) => {

  const { data } = useQuery("categories", () => {
    return therapy ? getTherapies().then((result) => result) : getCategories().then((result) => result)
  })

  if (!data) return <Loader />

  return (
    <div className='bg-white dark:bg-stone-800 p-8 mb-8 shadow-lg rounded-lg pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {therapy ? "Therapies" : "Categories"}
      </h3>
      <ul className='list-style-none'>
        {data?.map(({ slug, name, id }) =>
          therapy ? (
            <li onClick={() => handleClick(slug)} key={id} >
              <span className="widgets">
                {name}
              </span>
            </li>
          ) : (
            <Link key={id} href={`/category/${slug}`}>
              <span className="widgets">
                {name}
              </span>
            </Link>
          )
      )}
      </ul>
      
    </div>
  )
}

export default Categories
