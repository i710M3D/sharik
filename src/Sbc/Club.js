const Club = ({def,name,type,img}) => {
    return ( 
        <div className="rounded-[12px] h-[424px] shadow-xl md:h-[405px] " >
         
        <img src={img} className=" rounded-t-[12px] h-[45%] w-full " />
            <div id="text"  className="text-[#0083fd] p-4 text-sm relative h-[55%] " >
                <h1 className="font-semibold text-lg  " > {name} </h1>
                <p > {type} </p>
                <p  className=" mt-5 text-[#333] " >  {def} </p>
                <button  className=" absolute bottom-[8%] right-[5%] font-bold hover:text-[#0083fdc1] " >
                Discover more. </button>
            </div>
        </div>
     );
}
 
export default Club;