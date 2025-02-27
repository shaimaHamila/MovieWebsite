import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const inputRef = useRef<HTMLInputElement>(null);

  // Close input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setActiveNav("Home");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation items
  const navigation = [
    { name: "Home", path: "/", current: true },
    { name: "Favorit Movies", path: "/favorites", current: false },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set activeNav based on the current URL path
    const activeItem = navigation.find((item) => item.path === location.pathname);
    if (activeItem) {
      setActiveNav(activeItem.name);
    }
  }, [location, navigation]);

  return (
    <Disclosure as='nav' className='bg-black bg-opacity-70 fixed top-0 left-0 right-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-gray-700 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='block size-6 group-data-open:hidden' />
              <XMarkIcon aria-hidden='true' className='hidden size-6 group-data-open:block' />
            </DisclosureButton>
          </div>
          <div className='flex flex-1 items-center sm:items-stretch'>
            {/* Logo click navigates to Home */}
            <div className='flex shrink-0 items-center cursor-pointer' onClick={() => navigate("/")}>
              <img alt='Movie Logo' src='./png/logo.png' className='h-8 w-auto' />
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='hidden sm:flex space-x-4'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setActiveNav(item.name)}
                    className={`px-3 py-2 text-base font-medium rounded-md transition 
                      ${
                        activeNav === item.name
                          ? "text-red-500 underline underline-offset-4"
                          : "text-white hover:text-red-400"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
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
              href={item.path}
              onClick={() => setActiveNav(item.name)}
              className={`block rounded-md px-3 py-2 text-base font-medium transition 
                ${activeNav === item.name ? "text-red-500" : "text-gray-300 hover:text-red-400"}`}
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
