import Image from 'next/image';
import countries_icon from '../../public/assets/countries_icon.svg';
import teachers_icon from '../../public/assets/teachers_icon.svg';
import students_icon from '../../public/assets/students_icon.svg';
import arrows from '../../public/assets/arrows.svg';
import card1 from '../../public/assets/card1.svg';
import card2 from '../../public/assets/card2.svg';
import card3 from '../../public/assets/card3.svg';
import card from '../../public/assets/card.svg';
function Metrics(){
      return (
        <div className="pt-[0px]">
          <div className="bg-[#0F172A] flex flex-col items-center justify-center lg:flex-row lg:space-x-[220px] h-full lg:h-[250px] w-full py-4">
            <Image
              src="/assets/countries_icon.svg"
              alt="countries_icon"
              className=""
              width={250}
              height={250}
            />
            <Image
              src="/assets/teachers_icon.svg"
              alt="teachers_icon"
              width={250}
              height={250}
            />
            <Image
              src="/assets/students_icon.svg"
              alt="students_icon"
              width={250}
              height={250}
            />
          </div>
          <div className="lg:flex pt-[60px] px-4 lg:ml-[50px]">
            <p className="text-3xl lg:text-[40px] font-roboto font-bold lg:font-extrabold">
              What everyone says
            </p>
            <Image
              src={arrows}
              alt="arrows"
              className="hidden lg:block ml-[600px] h-[70px] w-[100px] mt-[-15px] "
            />
          </div>
          <div className="lg:hidden  lg:ml-[40px] mt-[-30px] lg:mt-0">
            <Image src={card1} alt="arrows" className="h-[400px] w-[400px]" />
            <Image
              src={card2}
              alt="arrows"
              className="hidden lg:block h-[400px] w-[400px] "
            />
            <Image
              src={card3}
              alt="arrows"
              className="hidden lg:block h-[400px] w-[400px]"
            />
          </div>
          <div className="hidden lg:block lg:ml-[40px] h-[100px] w-[1200px] mt-[30px]">
            <Image src={card} alt="card" />
          </div>
        </div>
      );
}
export default Metrics;
