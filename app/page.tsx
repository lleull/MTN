import Image from 'next/image'
import CustomComponent from './Components/CustomComponent'
import AboutComponent from './Components/AboutComponent'
import HG from './assets/HG.png'
import overLayer from './assets/BG Hero.png'
import Mountains from './assets/MG.png'
import VG from './assets/VG.png'
import Navbar from './Components/Navbar'
import Blender from './assets/BG Content.png'
import img1 from "./assets/Vector (1).png"
import img2 from "./assets/Vector.png"
export default function Home() {
  return (
    <div className="w-full  flex flex-col items-center  justify-center bg-bgcustom">
      {/* Custom <Classifiation></Classifiation> */}
      <div className="flex relative w-full h-[130vh]">
        <Image src={HG} alt="sd" className="w-full absolute top-0 h-[70vh]" />
        <Image src={overLayer} alt="sd" className="w-full absolute top-0 h-[70vh]" />

        <Image
          src={Mountains}
          alt="sd"
          width={1920}
          height={1422}
          className=" h-[80vh] absolute top-[40vh] "
        />
        <Image src={VG} alt="sd" className="w-full h-[80vh] absolute top-[70vh] " />
        <Image src={Blender} alt="sd" className="w-full h-[80vh] absolute top-[70vh] " />

        <Navbar />

        <div>
          <div>
            <h2>Follow</h2>
          </div>
          <Image src={img1} color='white' alt='s' className="w-5 h-5" />
          <Image src={img2} color='white' alt='s' className="w-5 h-5" />

        </div>
      </div>
      {/* <CustomComponent />
       <AboutComponent /> */}
    </div>
  )
}
