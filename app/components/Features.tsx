import Image from "next/image";
import poster from "../../public/assets/poster.svg";
function Features() {
  return (
    <>
      <div className="lg:flex">
        <div className="flex-grow">
          <p className="text-3xl lg:text-[40px] font-roboto font-bold lg:font-extrabold px-4 lg:ml-[60px] lg:mt-[410px]">
            All the cool{" "}
            <span className="underline decoration-orange-500 decoration-4">
              features
            </span>
          </p>
          <div className="font-roboto hidden font-normal lg:block mt-[35px] lg:ml-[80px] text-[20px]">
            <p>Mauris consequat, cursus pharetra et, habitasse nulla. </p>
            <p>odio ac. In et dolor eu donec maecenas nulla cras.</p>
            <p>pellentesque quisque feugiat cras ullamcorper,cras</p>
            <p>ullamcorper non viverra a, neque orci.maecenas nulla cras.</p>
          </div>
          <button className="hidden lg:block font-medium inline-block after:content-['→'] after:ml-2 text-[16px] font font-roboto lg:text-[20px] text-blue-600 mt-[50px] lg:ml-[80px]">
            View all the features
          </button>
        </div>

        <div className="lg:flex-shrink-0 lg:ml-4">
          <Image
            src={poster}
            alt="poster"
            className="hidden lg:h-[600px] lg:w-[479px] lg:block lg:mt-[180px] lg:mr-[110px]"
          />
        </div>
      </div>

      <div className="lg:hidden">
        <p className="px-4 pt-4 text-[16px] ">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>
        <button className="inline-block after:content-['→'] after:ml-2 text-blue-600 font-medium lg:text-[20px] text-[16px] font-roboto mt-8 px-4 pb-8">
          View all the features
        </button>
      </div>
      <Image src={poster} alt="poster" className="lg:hidden" />
    </>
  );
}
export default Features;
