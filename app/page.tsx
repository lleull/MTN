import Image from 'next/image'
import CustomComponent from './Components/CustomComponent'
import AboutComponent from './Components/AboutComponent'
import HG from './assets/HG.png'
import overLayer from './assets/BG Hero.png'
import Mountains from './assets/MG.png'
import VG from './assets/VG.png'
import Navbar from './Components/Navbar'
import Blender from './assets/BG Content.png'
import img1 from './assets/Vector (1).png'
import img2 from './assets/Vector.png'
import Followus from './assets/Follow us.png'
import arrow from './assets/arrow.png'
import Slider from './assets/Slider.png'
export default function Home() {
  return (
    <div className="w-full  flex flex-col items-center  justify-center bg-bgcustom">
      {/* Custom <Classifiation></Classifiation> */}
      <div className="flex relative w-full h-[140vh] overflow-hidden">
        <Image src={HG} alt="sd" className="w-full absolute top-0 h-[20vh]" />
        <Image src={overLayer} alt="sd" className="w-full absolute top-0 h-[70vh]" />

        <Image src={Mountains} alt="sd" className="mountain" />
        <Image src={VG} alt="sd" className="standman" />
        <Image src={Blender} alt="sd" className="w-full h-[80vh] absolute top-[70vh] " />

        <Navbar />

        <div className="absolute flex flex-row items-center justify-between z-50 top-0 left-0 w-full h-[80vh] ">
          <div className="flex mt-14 ml-24 flex-col items-start gap-7">
            <Image src={Followus} alt="sd" className="w-3 h-14" />
            <Image src={img1} color="white" alt="s" className="w-5 h-5" />
            <Image src={img2} color="white" alt="s" className="w-5 h-5" />
          </div>

          <div className="w-1/2 ml-56 flex flex-col">
            <h2 className="flex flex-row items-center text-2xl gap-2  text-orangeLine">
              <div className="w-[10vh] h-[2px] z-90 bg-orangeLine"></div>A Hiking guide
            </h2>
            <h1 className="text-[51px] w-2/3  font-chronic ">
              Be prepared for the Mountains and beyond!
            </h1>
            <h3 className="flex flex-row items-center gap-4 mt-10">
              Scroll down <Image src={arrow} alt="sd" width={10} height={10} />{' '}
            </h3>
          </div>

          <div className="flex flex-row     gap-7">
            <div className="w-4 h-32 bg-gray-500" />
            <Image src={Slider} alt="sd" className="w-44 h-full " />
          </div>
        </div>
      </div>
      <CustomComponent />
      <AboutComponent />
    </div>
  )
}



