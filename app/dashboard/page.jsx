"use client"
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState';

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <button className='ml-auto'>+ CreateNew</button>
      </div>
      {/* Show EmptyState below the header if no videos */}
      {videoList?.length === 0 && <EmptyState />}
    </div>
  )
}

export default Dashboard
