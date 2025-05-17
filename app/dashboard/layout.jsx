import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='flex'>
        <div className='hidden md:block h-screen bg-white w-64'>
          <SideNav />
        </div>
        <div className='md :ml-64 p-10'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
