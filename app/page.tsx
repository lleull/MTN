import Image from "next/image";
import CustomComponent from "./Components/CustomComponent";
export default function Home() {
  return (
  <div className="w-full h-[100vh] flex flex-col items-center  justify-center bg-bgcustom">

     {/* Custom <Classifiation></Classifiation> */}
  <CustomComponent/>

  </div>
  );
}
