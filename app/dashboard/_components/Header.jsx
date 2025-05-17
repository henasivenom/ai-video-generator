import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md bg-white z-10 relative' style={{ minHeight: 110 }}>
        {/* Logo and Title */}
        <div className="flex gap-3 items-center">
        <Image src={"/logo.jpg"} alt="Logo" width={100} height={100} />
        <h2 className='font-bold text-xl'>Ai Short Video</h2>
        </div>
        <div className='flex gap-3 '>
          <Button>Dashboard</Button>
          <UserButton/>
        </div>
    </div>
  )
}

export default Header
