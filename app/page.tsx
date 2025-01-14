import Image from "next/image";
import hero1 from "./assets/01.png"
export default function Home() {
  return (
  <div className="w-full h-[100vh] flex flex-col items-center  justify-center bg-bgcustom">

     {/* Custom <Classifiation></Classifiation> */}
    <div className=" h-[72vh] flex flex-row items-center justify-between w-[65%] ">
          <div className="w-1/2 relative">
          <h2 className="text-[124px] absolute top-5 left-5  text-gray-500">
                01
               </h2>
          <div className="h-full gap-10 flex ml-32  flex-col mb-24 mt-20 w-[70%]  ">
               <h2 className="flex flex-row items-center gap-2 text-orange-400">
                <div className="w-[10vh] h-[2px] bg-orange-400">

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
          <Image src={hero1} alt="sd" className="h-[85%] w-[35%] mt-24 mb-24 ml-10 "/>
    </div>

  </div>
  );
}
