import Landing1 from "../images/Landing1.png";
import { BsSearch } from "react-icons/bs" ;
import {AiOutlineArrowRight} from "react-icons/ai";
import Navbar from "./Navbar";
import NavDrop from "./NavDrop";
import { BsXLg } from "react-icons/bs";
import { FaBars , FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import {GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
const Landing = () => {
 
    return ( 
   
       <div>
        <Navbar/>
        <div id="Landing" className=" relative px-8 h-[100vh] my-10 ">
          
         <div className="w-[125px] h-[125px] grid items-center justify-center gap-[1px] bg-[#0083fda1] 
          absolute bottom-[6%] right-[10%] py-6 text-white rounded-[9999999px] justify-items-center font-semibold ">
          <h1 className=" text-[13px] ">
          Learn More 
          </h1>
          <h1 className=" text-[13px] ">
          About It 
          </h1>
          <AiOutlineArrowRight className="text-xl w-[20px] mt-2 " ></AiOutlineArrowRight>
           </div>
         <h1 className="bg-black p-[18px] px-[42px] text-2xl font-semibold md:bg-[transparent] md:text-4xl
          text-white absolute top-[6%] left-[6%] md:top-[3%] md:left-[3%] " >ShareIT EVENT</h1>
            <img src={Landing1} className="bg-cover h-full w-full" />

           <div id="search" className=" bg-white rounded-[15px] text-center absolute top-[50%] left-[50%] w-[703px]
           translate-x-[-50%] translate-y-[-50%] flex flex-col gap-10 p-[26px] md:w-[85%]  ">
           <h1 className="text-lg font-[600]" >Discover exclusive events, internships and way more</h1>
           <div>
           <input type="text" placeholder="Search for a domaine here..." 
           className="rounded-[9px] px-10 border-[#ddd] border-solid border h-[55px] w-full " />
           <BsSearch className="absolute left-[5%] top-[65%]  "></BsSearch>
           </div>
           
           </div>
        </div>
           </div>
       
     );
}
 
export default Landing;