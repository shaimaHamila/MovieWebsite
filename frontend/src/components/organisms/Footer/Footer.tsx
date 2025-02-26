import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#131313] text-white p-6 mt-28'>
      <div className='container flex-wrap flex gap-6 justify-between items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
        <div className='flex items-center'>
          <img src='/png/logo.png' alt='Movie Logo' className='h-10' />
        </div>

        <div className='flex gap-6 mb-4 sm:mb-0'>
          <Link to='/' className='hover:underline hover:text-red-500'>
            Home
          </Link>
          <Link to='/favorites' className='hover:underline hover:text-red-500'>
            Favorites Movies
          </Link>
        </div>

        <div className='text-sm'>
          <p>Movies is a free subscription service, and content availability may vary by region.</p>
          <p>© 2024 Movies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
