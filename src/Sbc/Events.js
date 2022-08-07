import { BsSearch , BsFilter } from "react-icons/bs" ;
import Event from "./Event";
import Presentation from "../images/Presentation.png"
import dj from "../images/dj.png"
import McIncub from "../images/McIncub.png"
import Navbar from "./Navbar";
const Events = () => {
   const event=[
      {id:0,
      name:"Summer Break Event",
       def:"sit amet consectetur  adipisicing Lorem ipsum,voluptates enim magni impedit fugiat, excepturi, laborntore consequatur! Totam, voluptatem animi. error ullam dolorem accusantium, itaque molestias?"
       ,img:dj
      },
      {id:1,
         name:"Lorem",
         def:" sit xcepturi,voluptatem animi.ptatum cere quaerat omnis suscipit inventore consequatur! Totam, voluptatem maiores voluptas error ullam dolorem accusantium, itaque molestias ullam dolorem accusantium"
         ,img:McIncub
         },

         {id:2,
            name:"Lorem",
            def:"sit xcepturi,voluptatem animi.ptatum cere quaerat omnis suscipit inventore consequatur! Totamanimi.ptatum maiores voluptas error ullam dolorem accusantium, itaque molestias ullam dolorem accusantium"
            ,img:Presentation
            } ]
    return ( 
         <div>
            <Navbar/>      
        <div  className="flex flex-col mt-10 px-4 lgm:px-[70px] " >
        <h1 className="font-bold text-lg">Discover diffrent <span className="text-[#0083fd] ">
       events </span> </h1>
        
        <div id="search" className=" mt-10 relative self-center md:flex md:items-center md:gap-5 md:w-full md:mt-5 ">
           <input type="text" placeholder="Search for a specific event here"
           className="rounded-[9px] pl-[60px] border-[#ddd] border-solid border h-[50px] w-[600px] md:w-[95%]" />
           <BsSearch className="absolute left-[4%] top-[35%]  "></BsSearch>
          <BsFilter className="absolute mdm:right-[3%] text-4xl p-1 text-white mdm:top-[16%] h-[35px] w-[35px]
           rounded-[50%] bg-[#0083fd] md:relative md:rounded-[9px] md:p-2 md:font-bold md:w-[85px] md:text-5xl md:h-[50px] " > 
             </BsFilter>  
        </div>
        <div className="grid grid-cols-1 gap-8 my-20 "> 
           { event.map(event=>(
              <div key={event.id} >
               <Event   def={event.def} 
               name={event.name} type={event.type} img={event.img}  />
               </div> ))
           }
           </div> 
         
        </div>
      </div>
     );
}
 
export default Events;