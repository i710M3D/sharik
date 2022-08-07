const Internship =  ({def,name,img,type}) => {
    return (  
  
        <div className="rounded-[12px] flex gap-4 relative shadow-xl h-[240px] md:h-[270px]   " >
         
            <img src={img} className=" rounded-l-[12px] h-[240px] w-[43%] md:h-[270px]  " />
                    <div id="text"  className="text-[#0083fd] p-4 text-sm w-[57%] md:p-1 " >
                    <h1 className="font-bold text-xl md:text-[15px]  " > {name} </h1>
                    <h2>{type}</h2>
                    <p  className=" mt-5 text-[#8d8181] md:mt-2 md:text-[12px] " >  {def} </p>
                    <div className="flex justify-between w-[50%] items-center absolute bottom-3 ">
                    <button  className=" text-[#0083fd] p-4 px-10
                    font-semibold lg:p-[10px] lg:px-5 md:w-[90px] md:h-[60px]" >
                    Part Time</button>
                    <button  className=" p-4 px-10 border-[#0083fd] border border-solid rounded-[7px]
                    font-semibold lg:p-[10px] lg:px-5 md:w-[90px] md:h-[60px] " >
                    Read more </button>
                    </div>
                </div>
        </div>
    );
}
 
export default Internship;