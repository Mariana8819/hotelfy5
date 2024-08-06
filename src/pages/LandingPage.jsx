import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-center'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Book Your Dream Vacation</h1>
      <p className='text-lg text-gray-600 mb-6'>Discover luxurious rooms and exclusive offers.</p>
      <Link to="/book" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
        Book Now
      </Link>
    </div>
  )
}

export default LandingPage