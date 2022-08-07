 import { IoChevronDownOutline , IoChevronUpOutline } from "react-icons/io5";
 import { useState } from "react";
 import { Link, useNavigate } from "react-router-dom";
const NavDrop = ({text,Type}) => {
    const [Up, setUp] = useState(false);
    return (  
        <div className="flex p-2 justify-between relative items-center rounded-[7px] pl-5 cursor-pointer bg-[#eee] w-[240px] lg:my-5 " 
        onClick={()=>{
        setUp(!Up);
        }}
        >
        <h3 className=" text-[15px] font-[600] " > {text} </h3>
{ !Up && <IoChevronDownOutline className="text-2xl font-bold" ></IoChevronDownOutline>}
{ Up && <IoChevronUpOutline className="text-2xl font-bold" ></IoChevronUpOutline>}
{ Up &&  text==="I want to share " && 
       <ul className="absolute flex flex-col py-1 justify-center items-center left-0 bottom-[-340%] 
rounded-[7px] z-50 gap-2 bg-[#eee] w-full list-none font-semibold " >
       
       <Link to="/signup3">
       <li className="w-full text-center h-[35px] py-1" >{Type[0]}</li>
       </Link>
       <Link to="/signup1">
       <li  className=" border-y border-white border-solid w-full text-center h-[35px] py-1" >{Type[1]}</li>
       </Link>
       <Link to="/signup3">
       <li className="w-full text-center h-[35px]" >{Type[2]  }</li> 
       </Link>
       </ul>}

       { Up &&  text!=="I want to share " && 
       <ul className="absolute flex flex-col py-2 justify-center items-center left-0 bottom-[-265%] 
rounded-[7px] z-50 gap-2 bg-[#eee] w-full list-none font-semibold " >
       
       <li className="w-full text-center h-[35px] py-1" >{Type[0]}</li>
       <li  className=" border-t border-white border-solid w-full text-center h-[40px] py-1" >{Type[1]}</li>
        </ul>}       
        </div>
     );
}
 
export default NavDrop;