import Image from 'next/image'
import CustomComponent from './Components/CustomComponent'
import AboutComponent from './Components/AboutComponent'
export default function Home() {
  return (
    <div className="w-full  flex flex-col items-center  justify-center bg-bgcustom">
      {/* Custom <Classifiation></Classifiation> */}
      <CustomComponent />
      <AboutComponent />
    </div>
  )
}
