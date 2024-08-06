import React from 'react'

const BookPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Book Your Stay</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1" htmlFor="checkin">
            Check-In Date:
          </label>
          <input
            id="checkin"
            type="date"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1" htmlFor="checkout">
            Check-Out Date:
          </label>
          <input
            id="checkout"
            type="date"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  </div>

  )
}

export default BookPage