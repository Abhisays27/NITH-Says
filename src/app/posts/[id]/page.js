import React from 'react'
import Input from '@/components/Input'
import Feed from '@/components/Feed'


const page = () => {
  return (
    <div className=' mx-auto border-r border-l min-h-screen w-full'>
    <div className='py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
      <h2 className='text-lg sm:text-xl font-bold'>Home</h2>
    </div>
    <Input />
    <Feed/>
    
  </div>
    
  )
}

export default page