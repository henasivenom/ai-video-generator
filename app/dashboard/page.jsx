"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import EmptyState from './_components/EmptyState';

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
        <button className='px-4 py-2 mt-4 bg-gray-200 text-gray-800 rounded'>+ create new</button>
      </Link>
      </div>
      {/* Show EmptyState below the header if no videos */}
      {videoList?.length === 0 && <EmptyState />}
    </div>
  )
}

export default Dashboard
