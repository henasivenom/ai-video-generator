import React from 'react'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex flex-col items-center justify-center mt-10 border-2 border-dotted min-h-[50vh]'>
      <h2 className='text-center mb-4'>You don't have any short video created</h2>
      <Link href={'/dashboard/create-new'}>
        <button className='px-4 py-2 mt-4 bg-gray-200 text-gray-800 rounded'>create new short video</button>
      </Link>
    </div>
  )
}

export default EmptyState
