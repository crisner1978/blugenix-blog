import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/modalAtom'
import Dropdown from './Dropdown'

const categories = [
  { name: 'Keto-verse', slug: 'ketoverse' },
  { name: 'Testosterone Therapy', slug: 'trt' },
]

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useRecoilState(modalState)
  const { pathname } = useRouter()

  const name =
    pathname === '/team/chris'
      ? 'chris'
      : pathname === '/team/jessee'
      ? 'jessee'
      : pathname === '/team/george'
      ? 'george'
      : null

  return (
    <header className="header">
      <nav className="nav">
        {/* Left Side */}
        <div className="cursor-pointer">
          <Link href="/">
            <span
              className={`navLogo ${
                pathname === '/' && 'navLogoActive dark:text-transparent'
              }`}
            >
              BLUGENIX
            </span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-end justify-evenly">
          {/* Mobile */}
          <div className="flex items-center space-x-3 md:hidden">
            {theme === 'dark' ? (
              <SunIcon
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="navSunIcon mt-1 animate-pulse"
              />
            ) : (
              <MoonIcon
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="navMoonIcon mt-1 animate-pulse"
              />
            )}

            <Dropdown />
          </div>

          {/* Full Version */}
          <ul className="hidden items-center space-x-5 md:flex">
            {theme === 'dark' ? (
              <SunIcon
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="navSunIcon hidden animate-pulse md:flex"
              />
            ) : (
              <MoonIcon
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="navMoonIcon hidden animate-pulse md:flex"
              />
            )}{' '}
            <li
              className={`navLink ${
                pathname === '/therapies' && 'text-blue-600 dark:text-blue-600'
              }`}
            >
              <Link href="/therapies">therapies</Link>
            </li>
            <li
              className={`navLink ${
                pathname === '/team' ||
                (pathname === `/team/${name}` &&
                  'text-blue-600 dark:text-blue-600')
              }`}
            >
              <Link href="/team">team</Link>
            </li>
            <li
              className={`navLink ${
                pathname === '/forms' && 'text-blue-600 dark:text-blue-600'
              }`}
            >
              <Link href="/forms">forms</Link>
            </li>
            <li
              className={`navLink ${
                pathname === '/blog' && 'text-blue-600 dark:text-blue-600'
              }`}
            >
              <Link href="/blog">blog</Link>
            </li>
          </ul>
          <a
            className="navTel via-hrefp-0 text-gray-100 will-change-scroll"
            href="tel:+5617776077"
          >
            561-777-6077
          </a>
          <div className="navBtn hidden md:inline-block">
            <button className="text-gray-100" onClick={() => setOpen(true)}>
              Free Consultation
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
