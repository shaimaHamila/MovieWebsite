import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const inputRef = useRef<HTMLInputElement>(null);
  // Close input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "Favorit Movies", href: "#", current: false },
  ];

  return (
    <Disclosure as='nav' className='bg-neutral-800 bg-opacity-70 fixed top-0 left-0 right-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='block size-6 group-data-open:hidden' />
              <XMarkIcon aria-hidden='true' className='hidden size-6 group-data-open:block' />
            </DisclosureButton>
          </div>
          <div className='flex flex-1 items-center sm:items-stretch'>
            <div className='flex shrink-0 items-center'>
              <img alt='Movie Logo' src='./public/png/logo.png' className='h-8 w-auto' />
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='hidden sm:flex space-x-4'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => setActiveNav(item.name)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition 
                      ${activeNav === item.name ? " text-red-500" : "text-gray-300 hover:text-red-400"}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='flex items-center space-x-2'>
              <button
                type='button'
                onClick={() => {
                  setIsExpanded(true);
                  setTimeout(() => inputRef.current?.focus(), 100); // Auto-focus after opening
                }}
                className='rounded-full bg-neutral-700 p-2 text-gray-400 hover:text-white transition'
              >
                <MagnifyingGlassIcon className='size-6' />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? "w-40 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <input
                  ref={inputRef}
                  type='text'
                  placeholder='Search...'
                  className='px-3 py-1.5 w-full bg-neutral-800 text-white rounded-md outline-none'
                />
              </div>
            </div>

            {/* Profile */}
            <div className='flex items-center space-x-3 ml-3'>
              <img alt='Profile' src='./public/png/profileImg.png' className='size-8 rounded-full' />
              <span className='text-white font-medium hidden sm:ml-6 sm:block'>Hello</span>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-1 px-2 pt-2 pb-3'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              onClick={() => setActiveNav(item.name)}
              className={`block rounded-md px-3 py-2 text-base font-medium transition 
                ${activeNav === item.name ? "  text-red-500" : "text-gray-300 hover:text-red-400"}`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
export default Header;
