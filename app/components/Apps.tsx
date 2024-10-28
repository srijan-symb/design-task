import Image from "next/image";
import video from "../../public/assets/video.svg"
import image2 from "../../public/assets/image2.svg"
import cut_out from "../../public/assets/cut_out.svg"
function Apps() {
  return (
    <div className="lg:flex font-roboto">
        <div className="lg:ml-[80px]">
            <p className="lg:font-extrabold mt-[60px] px-4 text-3xl font-bold lg:mt-[80px] lg:text-[40px] lg:px-4">An  <span className="underline decoration-4 decoration-orange-500">all-in-one</span> app
            <span className="lg:block lg:mt-[12px]"> that makes it easier </span> </p>
            <p className="text-[16px] px-4 mt-[20px] lg:hidden">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
            <div>
                <li className="list-none px-4 lg:px-4 mt-[30px] text-[20px] leading-loose">
    <ul className="before:content-['✓'] before:mr-2">Est et in pharetra magna adipiscing ornare aliquam.</ul>
    <ul className="before:content-['✓'] before:mr-2">Tellus arcu sed consequat ac velit ut eu blandit</ul>
    <ul className="before:content-['✓'] before:mr-2">Ullamcorper ornare in et egestas dolor orci</ul>
    </li>
    <p className="inline-block after:content-['→'] after:ml-2 px-4 text-blue-600 mt-[40px] font-medium lg:text-[20px] text-[16px]">
      Find more about the app
   </p>

            </div>
        </div>
        {/* <div className="lg:ml-[140px]">
            <Image src={video} alt="video"/>
        </div> */}
        {/* <div>
            <Image src={image2} alt="image2" className="z-20 h-[400px] w-[500px] lg:ml-[200px] lg:mt-[20px]"/>
            <Image src={cut_out} alt="cut_out" className="z-10 mt-[40px]"/>
        </div> */}
        <div className="relative">
  <Image 
    src={image2} 
    alt="image2" 
    className="z-20 h-[400px] w-[500px] lg:ml-[150px] lg:mt-[20px] relative" 
  />
  <Image 
    src={cut_out} 
    alt="cut_out" 
    className="z-10 mt-[40px] h-[300px] w-[1000px] lg:h-[350px] lg:w-[900px] rotate-[-124.64] absolute top-0 -left-[80px]" 
  />
</div>
    </div>
  );
}
export default Apps;
