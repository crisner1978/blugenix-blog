import { Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import MyLink from './MyLink'

export default function Dropdown() {
  return (
    <div className="-mb-2 text-right">
      <Menu as="div" className="relative inline-block text-center">
        {({ open }) => (
          <>
            <Menu.Button className="text-gray-500 dark:text-gray-300">
              {!open ? (
                <MenuIcon className="dropdownIcon" aria-hidden="true" />
              ) : (
                <XIcon className="dropdownIcon" aria-hidden="true" />
              )}
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="menuItems py-5 text-xl tracking-widest">
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink active={active} href="/" name="home" />
                    )}
                  </Menu.Item>
                </div>
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink
                        active={active}
                        href="/therapies"
                        name="therapies"
                      />
                    )}
                  </Menu.Item>
                </div>
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink active={active} href="/team" name="team" />
                    )}
                  </Menu.Item>
                </div>
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink active={active} href="/forms" name="forms" />
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}
