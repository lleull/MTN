import React from 'react'

const AboutComponent = () => {
  return (
    <div className="w-full pl-20 h-72 pb-20 bg-bgcustom flex flex-row items-start pr-20  justify-between">
      <div className="flex w-1/2 flex-col items-start h-full justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="font-chronic text-3xl">MTN</h1>
          <p className='text-sm'>Get out there & discover your next slope, mountain & destination!</p>
        </div>
        <p className="text-gray-400 ">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
      </div>
      <div className="flex flex-col items-start gap-5">
        <h2 className="text-xl font-chronic text-orange-400">More on our Blog</h2>
        <h3>About MTN</h3>
        <h3>Contribution & writer</h3>
        <h3>Write for us</h3>
        <h3>Contact us</h3>
        <h3>Privacy Policy</h3>
      </div>
      <div className="flex flex-col items-start gap-5">
        <h2 className="text-xl font-chronic text-orange-400">More on MTN</h2>
        <h3>The team</h3>
        <h3>Jobs</h3>
        <h3>Press</h3>
      </div>
    </div>
  )
}

export default AboutComponent
