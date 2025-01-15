import Image from 'next/image'
import React from 'react'
import hero1 from "./../assets/01.png"

const CustomComponent = () => {
  return (
    <div className=" h-[72vh] flex  flex-row justify-start items-start w-[65%] ">
    <div className="w-1/2 h-[90%]  relative">
    <h2 className="text-[135px] z-0 absolute font-bold top-5 left-5 mt-2  text-gray-500">
          01
         </h2>
    <div className="h-full gap-8 flex ml-28   flex-col mb-24 mt-24 w-[70%]  ">
         <h2 className="flex flex-row items-center gap-2 text-orange-400">
          <div className="w-[10vh] h-[1px] z-9 bg-orange-400">

          </div>
         GEt Started
         </h2>
         <h1 className="text-wrap text-5xl leading-snug ">What level of  hiker are you?</h1>
         <h1 className="text-[12px]">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </h1>
         <h2 className="flex flex-row items-center gap-2 text-orange-400">

          
       read more
          <div className="w-[10vh] h-[2px] bg-orange-400"/>
         </h2>
    </div>
        
    </div>
    <Image src={hero1} alt="sd" className="h-[95%] w-[45%] mt-24 mb-24 ml-10 "/>
</div>  )
}

export default CustomComponent