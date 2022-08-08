import { Link } from "react-router-dom";
import poly from './img/Polygon 1.svg'
import Anim from './animation';

const Signup1 = () => {
    return (
        <div className='flex  flex-wrap flex-row justify-between'>
            <div className="ml-[6%] flex flex-wrap w-[473px] max-h-fit flex-col mr-[6%] ">
                <h2 className="mt-[14px] font-jost font-semibold text-[32px]  leading-[43px] smn:mx-auto smn:mt-[137px] smn:text-[36px] mdn:mx-0 mdn:mt-[14px] mdn:text-[32px]  ">SHARIK.</h2>
                <div className="mdn:mt-[75px] smn:mt-[35px] grid gap-[2px]  ">
                    <h2 className="font-mon font-semibold text-[32px] text-[#1F1F1F]  leading-[39px] m-0">Sign up</h2>
                    <p className="font-mon text-[#666666] opacity-80 text-[16px] font-normal  leading-[20px] ">Sign up for free to access to our platform</p>
                </div>
                <div className="font-mon font-semibold text-[22px] leading-[27px] text-[#666666] mt-[33px]   text-center smn:hidden mdn:block ">1/2</div>
                <div className="  mdn:mt-[53px] smn:mt-[19px] ">
                    <form>

                        <label htmlFor='Clubsname' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit  ">Club's name</label>
                        <input id='Clubsname' type="text" className=" cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[23px] mt-[11px] block pl-[25px] font-pop text-[#666666] text-[14px] "></input>
                        <label htmlFor='email' className=" cursor-pointer font-mon font-normal text-[16px] inline leading-[20px] text-[#666666]  max-w-fit ">Email address</label>
                        <input id='email' type='email' className="cursor-pointer border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  mb-[23px] mt-[5px] block pl-[25px] font-pop text-[#666666] text-[14px] " />

                        <label htmlFor='uni' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit" >Choose your university</label>

                        <div className=" w-[100%]  relative mt-[11px] mb-[23px]">

                            <select id='uni' className="cursor-pointer appearance-none text-[18px] border-box h-[56px] w-[100%]  border-[1px] border-solid border-[#666666]/30 rounded-[12px]    font-pop text-[#666666]/25 leading-[27px] pl-[25px] font-normal " >

                                <option value="">USTHB</option>
                                <option value="">ESI</option>
                                <option value="">ENP</option>

                            </select>

                            <label htmlFor='uni' className='cursor-pointer absolute top-[40%] right-[4%] pointer-events-none' ><img src={poly} alt="" /></label>
                        </div>

                        <label htmlFor='wilaya' className="cursor-pointer font-mon font-normal text-[16px] leading-[20px] text-[#666666] block max-w-fit" >Choose your wilaya</label>
                        <div className="relative w-[100%] mt-[11px] ">

                            <select id='wilaya' className="cursor-pointer appearance-none border-box h-[56px] w-[100%] border-[1px] border-solid border-[#666666]/30 rounded-[12px]  block font-pop text-[#666666]/25  pl-[25px] font-normal text-[18px] leading-[27px] " >

                                <option value="">ALGER</option>
                                <option value="">SETIF</option>
                                <option value="">ORAN</option>

                            </select>
                            <label htmlFor='uni' className='cursor-pointer absolute top-[40%] right-[4%] pointer-events-none' ><img src={poly} alt="" /></label>
                        </div>

                        <Link to='/signup2'>
                            <button type='button' className='mt-[40px] w-[98%] py-[18px] bg-[#0183FF] rounded-[18px] font-mon font-semibold text-[22px] leading-[27px] text-white '>Next</button>
                        </Link>

                    </form>


                </div>

            </div>
          
            <Anim/>
        </div>
    );
}

export default Signup1;