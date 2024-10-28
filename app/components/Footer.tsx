import Image from "next/image";
import logo2 from "../../public/assets/logo2.svg"
function Footer(){
     return (
       <footer className="bg-[#1F172A] w-full ">
         <div className="px-4 lg:flex  space-y-8 lg:space-y-0 flex flex-col lg:flex-row justify-around max-w-[1420px] mx-auto py-4">
           <Image src={logo2} alt="logo" className="" />
           <div className="footer-product py-2 h-48">
             <h2 className="text-white  text-[14px] ">Product</h2>
             <ul className="product text-white font-light text-[14px] flex flex-col gap-5 mt-4">
               <li>Pricing</li>
               <li>Overview</li>
               <li>Browse</li>
               <li>Accessibility</li>
             </ul>
           </div>

           <div className="footer-Solutions py-2 h-48">
             <h2 className="text-white  text-[14px] ">Solutions</h2>
             <ul className="product text-white font-light text-[14px] flex flex-col gap-5 mt-4">
               <li>Brainstorming</li>
               <li>Ideation</li>
               <li>Wireframing</li>
               <li>Research</li>
             </ul>
           </div>

           <div className="footer-Resources py-2 h-48">
             <h2 className="text-white  text-[14px] ">Resources</h2>
             <ul className="product text-white font-light text-[14px] flex flex-col gap-5 mt-4">
               <li>Help Center</li>
               <li>Blog</li>
               <li>Tutorials</li>
               <li>FAQs</li>
             </ul>
           </div>
           <div className="footer-Support py-2 h-48">
             <h2 className="text-white  text-[14px] ">Support</h2>
             <ul className="product text-white font-light text-[14px] flex flex-col gap-5 mt-4">
               <li>Contact Us</li>
               <li>Developers</li>
               <li>Documentation</li>
               <li>Integrations</li>
             </ul>
           </div>

            <div className="footer-Company py-2 h-48">
              <h2 className="text-white  text-[14px] ">Company</h2>
              <ul className="product text-white font-light text-[14px] flex flex-col gap-5 mt-4">
                <li>About</li>
                <li>Press</li>
                <li>Events</li>
                <li>Request Demo -&gt;</li>
              </ul>
            </div>
         </div>
         <div className="w-full bg-white h-[1px] mb-2 mt-4  max-w-[1300px] mx-auto"></div>
         <div className="lg:flex justify-between max-w-[1300px] mx-auto ">
           <p className="text-white px-4  lg: mt-[10px] text-[16px] lg:text-[16px] pt-[24px] pb-[24px]">
             uteach @ 2023. All rights reserved.
           </p>
                 <ul className="flex text-white font-light text-[14px] gap-5 my-auto">
                     <li>Terms</li>
                     <li>Privacy</li>
                     <li>Contact</li>
                     <li className="inline-flex items-center gap-2"> <Image src="/assets/world.svg" alt="EN" width={16} height={16}/>EN</li>
                     <li className="inline-flex items-center gap-2"> <Image src="/assets/euro.svg" alt="EUR" width={16} height={16}/>EUR</li>
                 </ul>
         </div>
       </footer>
     );
}
export default Footer;