import Image from "next/image";
import collage from "../../public/assets/collage.svg";
import plane from "../../public/assets/plane.svg";
function International() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <div>
          <Image
            src={collage}
            alt="collage"
            className="px-4 mt-[20px] h-[500px] w-[600px] lg:h-[651px] lg:ml-[80px] "
          />
        </div>
        <div>

          <div className="lg:font-extrabold mt-[20px] px-4 text-3xl font-bold lg:mt-[120px] lg:text-[40px] lg:px-4 lg:ml-[20px] font-roboto">
            <Image
              src={plane}
              alt="Image description"
              className="ml-[280px] mb-4 lg:mb-4 w-[10%] lg:w-[9%]"
            />
            <p className="mt-[-20px]  ">
              Meet international
              <span className="lg:block mt-3 "> students & teachers</span>
            </p>
          </div>

          <div className="hidden lg:block text-[20px] lg:py-10 lg:ml-[30px] text-wrap font-roboto">
            <p>Morbi sit egestas dignissim pharetra, sed amet.Tempus</p>
            <p>facilisi facilisi nec magna hendrerit.Eget commodo eget</p>
            <p>facilisi facilisi nec magna hendrerit.faucibus aenean </p>
            <p>Placerat ipsum sit tellus urna, faucibus aenean lorem.</p>
          </div>
          <p className="lg:hidden text-[16px] py-6 px-4 font-roboto">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
          <button className=" inline-block after:content-['→'] after:ml-2 lg:ml-[20px] px-4 font-medium font-roboto text-blue-500 lg:text-[20px] text-[16px]">
            Explore teachers and students
          </button>
        </div>
      </div>
    </>
  );
}
export default International;
