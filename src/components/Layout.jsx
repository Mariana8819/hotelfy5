import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar />
        <main className='flex-1 bg-gray-100 p-6'>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout