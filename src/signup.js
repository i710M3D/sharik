import icon from './img/icon.svg'
import gr from './img/google_recaptcha-official 2.svg'
import poly from './img/Polygon 1.svg'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Anim from './animation';




const Signup0 = () => {
    const [psw, setPsw] = useState('password');
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
        <div className='flex  flex-wrap justify-between'>
            <div className=" ml-[6%] mr-[6%] flex flex-wrap w-[473px]">
                <div className='smn:mx-auto mt-[53px]  mdn:mx-0 lgn:mx-0'>
                    <h2 className=" mt-[14px] font-jost font-semibold text-[32px]  leading-[43px] smn:text-[36px] mdn:text-[32px] ">SHARIK.</h2>
                </div>

                <div className="mt-[75px]   ">
                    <div className="mb-[53px]  ml-[0%] ">
                        <h2 className="font-mon font-semibold text-[32px] text-[#1F1F1F]  leading-[39px] m-0">Sign up</h2>
                        <p className="font-mon text-[#666666] opacity-80 text-[16px] font-normal  leading-[20px] ">Sign up for free to access our platform</p>
                    </div>
                    <form>

                        <label htmlFor='email' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Email address</label>
                        <input id='email' type="email" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[21px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] "></input>

                        <div className="flex flex-wrap flex-row  justify-between mr-[16px]  items-baseline " >
                            <label htmlFor='psw' className=" cursor-pointer font-mon font-normal text-[16px] inline leading-[20px] text-[#666666]  max-w-fit ">Password</label>
                            <button onClick={handleClick} type="button" className="bd-white inline cursor-pointer ">
                                <div>
                                    <img src={icon} alt="" className='inline mr-[4px] mt-[4px] ' />
                                    <span className="font-mon font-normal text-[18px] text-[#666666] opacity-80 " >{HideShow}</span>
                                </div>
                            </button>
                        </div>
                        <input id='password' type={psw} className="cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30  rounded-[12px]  mt-[5px] block pl-[25px] font-pop text-[#666666] text-[14px] " />
                        <p className="font-mon font-normal leading-[17px]  text-[#666666] mt-[4px] mb-[25px] text-[14px]  ">Use 8 or more characters with a mix of letters, numbers & symbols</p>

                        <label htmlFor='uni' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit" >Choose your university</label>
                        <div className=" w-[100%]  relative mt-[11px]">

                            <select id='uni' className="cursor-pointer appearance-none text-[18px] border-box h-[56px] w-[100%]  border-[1px] border-solid border-[#666666]/30  rounded-[12px]    font-pop text-[#666666]/25 leading-[27px] pl-[25px] font-normal " >

                                <option value="">USTHB</option>
                                <option value="">ESI</option>
                                <option value="">ENP</option>

                            </select>

                            <label htmlFor='uni' className='cursor-pointer absolute top-[40%] right-[4%] pointer-events-none' ><img src={poly} alt="" /></label>
                        </div>
                    </form>
                </div>

                <div className="max-w-fit mt-[43px]">
                    <label htmlFor='ha' className=" font-mon font-normal text-[16px] leading-[20px] text-[#333333] mb-[28px] flex justify-start items-center ">
                        <input type="checkbox" name="" className="cursor-pointer w-[18px] h-[18px] mr-[11px] accent-black" />
                        <span className=''>Agree to our <Link to='/terms-of-use'><span className="underline cursor-pointer">Terms of use</span></Link> and <Link to='/privacy-policy'><span className="underline cursor-pointer">Privacy
                            Policy</span></Link> </span></label>
                    <label htmlFor='ba' className=" font-mon font-normal text-[16px] leading-[20px] text-[#333333]   flex justify-start items-center">
                        <input type="checkbox" name="" className="cursor-pointer w-[18px]  h-[18px] mr-[11px] accent-black " /><span className='cursor-pointer'>Subscribe to our monthly newsletter</span></label>
                </div>


                <div className="flex flex-row items-center text-center border-box w-[363px] h-[68px] bg-white border-[1px] border-solid border-[#333333]/30 rounded-[18px] mt-[52px] smn:mx-auto  mdn:mx-0">
                    
                    <label htmlfor="robot" className="pl-[26px] cursor-pointer ">
                        <input type="checkbox" name="" id="robot" className='cursor-pointer' /><span className="cursor-pointer w-[117px] h-[20px] font-mon font-light text-[16px] leading-[20px] text-[#333333] pl-[9px] mr-[125px] max-w-fit">i'm not a robot</span>
                        <img src={gr} alt="" className=' inline pr-[10px] ' />
                    </label>
                </div>
                
                    <div className=" cursor-pointer mt-[40px] flex items-center justify-center w-[250px] h-[64px] bg-[#111111] opacity-25 rounded-[32px] text-white font-mon font-medium text-[22px] leading-[27px] mb-[10px] smn:mx-auto mdn:mx-0  ">
                       <Link to="/">
                       <p >Sign up</p>
                       </Link>
                    </div>
               
                
                    <div className='smn:mx-auto mdn:mx-0' >
                    <Link to='/signin' >
                        <span className="  cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#333333]  ">Already have an acount? <span className='underline font-medium'>Log in </span></span>
                    </Link>
                    </div>
                




            </div>
            <Anim />

        </div>
    );
}

export default Signup0;