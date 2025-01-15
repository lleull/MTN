import Image from 'next/image'
import React from 'react'
import PageInfos from '../utils/PageInfos'
const CustomComponent = () => {
  return (
    <div className="w-full h-[screen] overflow-scroll flex flex-col items-center gap-20">
      {PageInfos.map((data, i) => {
        return (
          <div
            key={i}
            className={`h-[82vh] flex  flex-row ${
              data.id == '02' ? 'flex-row-reverse  gap-24' : ''
            }  w-[65%] `}
          >
            <div className="w-[80%] mt-5 h-[90%]  relative">
              <h2 className="text-[130px] z-10 absolute font-bold top-5 left-2 mt-2  text-gray-500">
                {data.id}
              </h2>
              <div className="h-full inset-0 bg-opacity-50 z-2- gap-8 flex ml-28   flex-col mb-24 mt-32 w-[70%]  ">
                <h2 className="flex flex-row items-center gap-2 text-orange-400">
                  <div className="w-[10vh] h-[1px] z-9 bg-orange-400"></div>
                  {data.title}
                </h2>

                <div className="w-full h-[80%] flex flex-col gap-2">
                  <h1 className="text-wrap text-5xl leading-snug font-chronic ">{data.subTitle}</h1>
                  <h1 className="text-[12px]">{data.desc}</h1>
                  <h2 className="flex flex-row items-center gap-2 text-orange-400">
                    {data.detail && data.detail}
                    <div className="w-[10vh] h-[2px] bg-orange-400" />
                  </h2>
                </div>
              </div>
            </div>
            <Image src={data.image} alt="sd" className="h-[95%] w-[38%]  ml-10 " />
          </div>
        )
      })}
    </div>
  )
}

export default CustomComponent
