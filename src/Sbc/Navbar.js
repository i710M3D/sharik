import NavDrop from "./NavDrop";
import { BsXLg } from "react-icons/bs";
import { FaBars , FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import {GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [Nav, setNav] = useState(false);
    return ( 
        <div>
                    
        <div >
             {!Nav && <div  className="flex px-8 h-[64px] justify-between items-center lg:px-0 lg:justify-around " >
            <FaBars  className="font-bold text-2xl cursor-pointer lgm:hidden " onClick={()=>{setNav(prev=>prev=true)}}
            ></FaBars> 
            
        <h1 className="font-bold text-2xl uppercase cursor-pointer " >Sharik.</h1>
  
        <div className="flex gap-5 lg:hidden">
        <NavDrop text="I want to participate " Type={ ["Activities","Get into Professional life", ""] } ></NavDrop>
        <NavDrop text="I want to share "  Type={ ["University","Club" ,"Companies" ] } ></NavDrop>
        </div>
        <h1 className="font-bold text-[16px] cursor-pointer lg:hidden " >About</h1>
    
         <div id="lang" className="flex p-2 gap-1 items-center cursor-pointer rounded-[7px] lg:hidden bg-[#eee]" >
         <GrLanguage className="font-bold text-sm "></GrLanguage>
         <p className="font-[600] text-sm" >En</p>
         </div>

         <div  id="Login-Sign in"  className="flex gap-3 items-center lg:hidden">
         <h1 className="font-[600] text-[16px] cursor-pointer " >Login</h1>
         <button className="text-white p-[9px] bg-[#0083fd] font-[600] text-[15px] px-8 rounded-[8px]
          hover:bg-[#0083fdc1]">Sign Up</button>
         </div>
    </div>}
  { Nav && <div  className="grid px-8 h-[100vh] w-full p-3 justify-center justify-items-center items-center
   fixed top-0 bg-white z-30  " >
  <BsXLg  className="absolute top-[5%] text-xl right-[5%] cursor-pointer "  onClick={()=>{setNav(prev=>prev=false)}}  ></BsXLg>
  <h1 className="font-bold text-5xl uppercase cursor-pointer " >Sharik.</h1>

  <div >
  <NavDrop text="I want to participate "></NavDrop>
  <NavDrop text="I want to share "></NavDrop>
  </div>
  <h1 className="font-bold text-2xl cursor-pointer " >About</h1>

   <div  id="Login-Sign in" className="flex flex-col items-center " >
   <div id="lang"  className="flex p-2 gap-1 items-center w-[75px] cursor-pointer rounded-[7px] bg-[#eee]" >
   <GrLanguage className="font-bold text-lg "></GrLanguage>
   <p className="font-[600] text-lg" >En</p>
   </div>
   <Link to='/'>
   <button type="button" className="font-[600] text-xl cursor-pointer block w-full mt-4  " >Login</button>
   </Link>
   
   <button className="text-white my-2 p-[9px] bg-[#0083fd] font-[600] text-[15px] px-12 rounded-[8px]
    hover:bg-[#0083fdc1]">Sign Up</button>

   </div>
    </div>}

    </div>
       </div> 
  
     );
}
 
export default Navbar;