import Image from "next/image"; 
import lines from "../../public/assets/lines.svg";
function Tools() {
    return (<div className="bg-white lg:bg-slate-100 font-roboto"> 
                <div>
                    <p className="mt-20 lg:mt-24 py-[40px] text-3xl px-4 font-bold lg:font-extrabold lg:text-center lg:text-[40px]"> All the  <span className="underline decoration-4 decoration-orange-500">tools</span> that you need</p>
                    <p className="mt-[-10px] px-4 lg:text-center lg:leading-[0.75] lg:text-[20px] text-[16px]">
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
                        <span className="hidden lg:block"><br /></span>
                        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
                     </p>
                </div>
<div className="relative flex justify-between items-center">
  <Image 
    src={"/assets/right_column.svg"} 
    alt="right column" 
    className="
      z-10 
      h-[100px] w-[250px]    
      sm:h-[50px] sm:w-[60px]  
      lg:h-[480px] lg:w-[600px]" 
          width={600}
          height={480}
  />

  <Image 
    src={"/assets/screen.svg"} 
    alt="screen" 
    className="
      absolute z-20 
      h-[200px] w-[200px]  {/* Default size for mobile screens */}
      sm:h-[100px] sm:w-[100px]  {/* Size for small screens */} 
      lg:h-[800px] lg:w-[900px]  
       left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 " 
          width={900}
          height={800}
  />

  <Image 
    src={"/assets/right2_column.svg"} 
    alt="right column" 
    className="
      z-10 
      h-[150px] w-[300px]   
      sm:h-[10px] sm:w-[20px] 
      lg:h-[600px] lg:w-[400px] top-[-60px]" 
      width={400}
      height={600}
  />
</div>
<div className="relative">
  <Image 
    src={lines} 
    alt="lines" 
    className="absolute right-[50px] top-[-35px]"
  />
</div>
<div className="flex space-x-14 ml-0 ">
      <Image src={"/assets/icon1.svg"} alt="icon1" className="lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40 lg:mb-12" width={50} height={50}/>
      <Image src={"/assets/icon2.svg"} alt="icon2" className="lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" width={50} height={50}/>
      <Image src={"/assets/icon3.svg"} alt="icon3" className="lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" width={50} height={50}/>
      <Image src={"/assets/icon4.svg"} alt="icon4" className="lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" width={50} height={50}/>
    <Image 
    src={"/assets/icon5.svg"} 
    alt="icon5"  
      className="hidden lg:block lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
    width={50}
    height={50}
  />
  
  <Image 
    src={"/assets/icon6.svg"} 
    alt="icon6"  
    className="hidden lg:block lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
    width={50}
    height={50}
  />
  
  <Image 
    src={"/assets/icon7.svg"} 
    alt="icon7"  
    className="hidden lg:block lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
    width={50}
    height={50}
  />
  
  <Image 
    src={"/assets/icon8.svg"} 
    alt="icon8"  
          className="hidden lg:block lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
          width={50}
          height={50}
  />
  
  <Image 
    src={"/assets/icon9.svg"} 
    alt="icon9"  
          className="hidden lg:block  lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
          width={50}
          height={50}
  />
</div>


    </div>);
}
export default Tools;
      