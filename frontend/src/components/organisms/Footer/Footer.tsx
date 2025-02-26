const Footer = () => {
  return (
    <footer className='bg-[#131313] text-white p-6 mt-16'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <img src='/public/png/logo.png' alt='Movie Logo' className='h-10' />
        </div>

        <div className='flex gap-6'>
          <a href='/' className='hover:underline hover:text-red-500'>
            Home
          </a>
          <a href='/favorites' className='hover:underline hover:text-red-500'>
            Favorites Movies
          </a>
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
