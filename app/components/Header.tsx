import Image from "next/image";
import logo from "../../public/assets/logo.svg"
import hamburger from "../../public/assets/hamburger.svg"
import Link from "next/link";
function Header() {
    return (
      <header className="w-full px-4 mt-4 sticky top-0 z-50 border-b border-gray-200 pb-2 backdrop-blur-md bg-white/50">
      <div className="flex w-full items-center justify-between max-w-[1440px] ">
        <div className="lg:ml-16">
          <Image src={logo} alt="logo h-[35px] w-[80px]" />
        </div>
        <div className="hidden md:flex flex-grow mx-16 items-center">
          <div className="flex-grow flex items-center lg:space-x-20 font-medium">
            <Link href="/"  className="text-black px-3 py-3 font-medium">Products</Link>
            <Link href="/"  className="text-black px-3 py-3 font-medium">Solutions</Link>
            <Link href="/"  className="text-black px-3 py-3 font-medium">Pricing</Link>
            <Link href="/"  className="text-black px-3 py-3 font-medium">Resources</Link>
          </div>
    <div className="w-60 flex space-x-4 font-medium items-center justify-end ">
      <Link href="#" className="w-full h-full text-black font-medium">Log in</Link>
            <button className="bg-white w-full h-full px-3 py-2 border-2 border-black rounded-lg text-sm ">Sign up Now</button>
    </div>
  </div>

        <div className="md:hidden">
          <Image src={hamburger} alt="menu" />
        </div>
        </div>
        </header>
    );
  } 
  
  export default Header;
  