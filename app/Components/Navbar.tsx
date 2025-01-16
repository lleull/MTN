import React from 'react'
import usericon from './../assets/Account.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className="flex flex-row absolute top-0 w-full items-center justify-between pl-10 pr-10 mt-4">
      <h1 className="text-xl font-chronic">MTN</h1>
      <div className="flex flex-row items-center gap-10">
        <h3 className="font-semibold hover:border-b-2 border-b-red-500 cursor-pointer">Equipment</h3>
        <h3 className="font-semibold hover:border-b-2 border-b-red-500 cursor-pointer">About Us</h3>
        <h3 className="font-semibold hover:border-b-2 border-b-red-500 cursor-pointer">Blog</h3>
      </div>
      <div className="flex flex-row gap-2">
        <Image src={usericon} color='white' alt='s' className="w-24 h-5" />
        {/* <h3>Account</h3> */}
      </div>
    </div>
  )
}
export default Navbar
