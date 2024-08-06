import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <h5 className='text-2xl font-bold mb-2'>Hotelfy</h5>
            <p className='mb-1'>Dirección del hotel, Ciudad, País</p>
            <p className='mb-1'>Teléfono: +123 456 7890</p>
            <p>
              Email: <a href="mailto:info@hotelfy.com" className='text-green-400 hover:text-green-300'>info@hotelfy.com</a>
            </p>
          </div>
          <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-green-400 hover:text-green-300'>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-green-400 hover:text-green-300'>Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-green-400 hover:text-green-300'>Instagram</a>
          </div>
        </div>
        <div className='mt-6 border-t border-gray-700 pt-4 text-center'>
          <p>&copy; {new Date().getFullYear()} Hotelfy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
