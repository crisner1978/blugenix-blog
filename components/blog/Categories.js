import Loader from 'components/Loader'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { getCategories, getTeam, getTherapies } from 'services/queries'
import { useTherapyState } from '../../atoms/therapyAtom'
import { useTeamState } from '../../atoms/teamAtom'
import { useRouter } from 'next/router'

const Categories = ({ therapy, handleClick, team }) => {
  const [therapyValue, setTherapyValue] = useTherapyState()
  const [teamValue, setTeamValue] = useTeamState()
  const { asPath } = useRouter()

  console.log("pathname", asPath)

  const { data } = useQuery('categories', () => {
    return therapy
      ? getTherapies().then((result) => result)
      : team
      ? getTeam().then((result) => result)
      : getCategories().then((result) => result)
  })

  if (!data) return <Loader />

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg dark:bg-stone-800">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {therapy ? 'Therapies' : team ? "Team" : 'Categories'}
      </h3>
      <ul className="list-style-none">
        {data?.map(({ slug, name, id }) =>
          therapy || team ? (
            <li onClick={() => handleClick(slug)} key={id}>
              <span
                className={`widgets ${
                  teamValue === slug
                    ? 'text-blue-600 dark:text-blue-600'
                    : therapyValue == slug && 'text-blue-600 dark:text-blue-600'
                }`}
              >
                {name}
              </span>
            </li>
          ) : (
            <Link key={id} href={`/category/${slug}`}>
              <span className={`widgets ${asPath === `/category/${slug}` && 'text-blue-600 dark:text-blue-600'}`}>{name}</span>
            </Link>
          )
        )}
      </ul>
    </div>
  )
}

export default Categories
