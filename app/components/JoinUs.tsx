import Image from "next/image";
import side1 from "../../public/assets/side1.svg";
import side2 from "../../public/assets/side2.svg";
function JoinUs(){
     return(
        <div className="bg-[#FACC15]">
           <div className="lg:flex">
                <Image src={side1} alt="side1" className="h-[400px] w-[450px] lg:h-[500px] lg:w-[400px] mt-[50px] rotate-90 lg:rotate-0"/>
                <div className="lg:mt-[180px] text-center">
                    <p className="text-3xl lg:text-[40px] font-roboto font-bold lg:font-extrabold">Join a world of learning</p>
                    <p className="py-8 lg:text-[20px] font-roboto text-[16px]">Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                    Risus elit et fringilla habitant ut facilisi.</p>
                    <button className="bg-[#EA580C] text-white px-4 py-2 lg:text-[20px] text-[16px] font-roboto lg:font-bold font-medium rounded">Sign up Now</button>
                </div>
                <Image src={side2} alt="side2" className="h-[400px] w-[450px] lg:h-[500px] lg:w-[400px] lg:mt-[50px] rotate-90 lg:rotate-0"/>
           </div>
           
        </div>
     );
}
export default JoinUs;
