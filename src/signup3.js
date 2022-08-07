import upload from './img/bi_upload.svg'
import icon from './img/icon.svg'
import { useState } from 'react';
import Anim from './animation';
import { Link, useNavigate } from "react-router-dom";
    

const Signup3 = () => {
    const [psw, setPsw ]= useState('password');
    const [HideShow, setHideShow] = useState('See');
    
    const handleClick = () => {
      if (psw === 'password') {
        setPsw('text');
        setHideShow('Hide');
      } else {
        setPsw('password');
        setHideShow('See');
      }
    }
    return (  
        <div className='flex  flex-wrap flex-row justify-between '>
        <div className="ml-[6%]  flex flex-wrap  max-h-fit  max-w-[473px] mr-[6%] flex-col ">
            <h2 className="mt-[14px] font-jost font-semibold text-[32px]  leading-[43px] smn:mx-auto smn:mt-[137px] smn:text-[36px] mdn:mx-0 mdn:mt-[14px] mdn:text-[32px] lg:mx-0 ">SHARIK.</h2>
            <div className="mdn:mt-[75px] smn:mt-[35px]  grid gap-[2px] ">
                <h2 className="font-mon font-semibold text-[32px] text-[#1F1F1F]  leading-[39px] m-0">Sign up</h2>
                <p className="font-mon text-[#666666] opacity-80 text-[16px] font-normal  leading-[20px] ">Sign up for free to access to our platform</p>
            </div>
           
            <div className=" mdn:mt-[53px] smn:mt-[19px] ">
            <form>
                <label htmlFor='mfn' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block maw-w-fit  ">Company’s Name</label>
                <input id='mfn' type="text" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[23px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] "></input>
                <label htmlFor='mp' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block maw-w-fit  ">Company’s Email</label>
                <input id='mp' type="text" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[23px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] "></input>
                <label htmlFor='pn' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block maw-w-fit  ">Phone Number</label>
                <input id='pn' type="text" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px] mb-[23px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] "></input>
                <label htmlFor='up' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block maw-w-fit  ">Upload your ID</label>
                
                <div className="bg-[#0183FF] mt-[11px] border-box h-[56px] w-[38%]  flex justify-center items-center rounded-[12px] border-[1px] border-solid border-[#666666]/35 cursor-pointer">
                <input type="file" name="" id='up' className='hidden'/>
                <label for="up" className='bg-[#0183FF] block cursor-pointer'><img src={upload} alt="" className=''/></label>
                </div>
                 
                <div className="flex flex-wrap flex-row  justify-between mr-[16px]  items-baseline mt-[23px] " >
                    <label htmlFor='password' className=" cursor-pointer font-mon font-normal text-[16px] inline leading-[20px] text-[#666666]  max-w-fit ">Password</label>
                        <button onClick={handleClick} type="button" className="bd-white inline cursor-pointer ">
                            <div>
                            <img src={icon} alt="" className='inline mr-[4px] mt-[4px] ' />
                            <span  className="font-mon font-normal text-[18px] text-[#666666] opacity-80 " >{HideShow}</span>
                            </div>
                        </button>
                </div>
                <input id='password' type={psw}  className="cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px] mt-[5px] block pl-[25px] font-pop text-[#666666] text-[14px] " />
            <p className="font-mon font-normal leading-[17px] flex items-center text-[#666666] mt-[4px] text-[14px] ">Use 8 or more characters with a mix of letters, numbers & symbols</p>
            </form>
            <Link to="/">
            <button type='submit' className='mt-[75px] w-[98%] py-[18px] bg-[#0183FF] rounded-[18px] font-mon font-semibold text-[22px] leading-[27px] text-white '>Sign Up</button>
            </Link>


            </div>

        </div>
        <Anim/>
    </div>);
}
 
export default Signup3;