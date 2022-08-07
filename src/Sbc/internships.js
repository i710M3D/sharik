import { BsSearch , BsFilter } from "react-icons/bs" ;
import Internship from "./intership";
import Presentation from "../images/Presentation.png"
import His from "../images/His.png"
import McIncub from "../images/McIncub.png"
import Navbar from "./Navbar";
import unsplash_U2BI3GMnSSE from "../images/unsplash_U2BI3GMnSSE.png"
import unsplash_rxpThOwuVgE from "../images/unsplash_rxpThOwuVgE.png"

const Internships = () => {
   const event=[
      {id:0,
        type:"Federal Reserve Bank of Kansas City",
      name:"Web Design and Experience Intern",
       def:"sit amet consectetur  adipisicing Lorem ipsum,voluptates enim magni impedit fugiat, excepturi, laborntore consequatur! Totam, voluptatem animi. error ullam dolorem accusantium, itaque molestias?"
       ,img:unsplash_U2BI3GMnSSE
      },
      {id:1,
        type:"Federal Reserve Bank of Kansas City",
         name:"Web Developer",
         def:" sit xcepturi,voluptatem animi.ptatum cere quaerat omnis suscipit inventore consequatur! Totam, voluptatem maiores voluptas error ullam dolorem accusantium, itaque molestias ullam dolorem accusantium"
         ,img:unsplash_rxpThOwuVgE
         },

         {id:2,
            type:"Federal Reserve Bank of Kansas City",
            name:"Design Intern",
            def:"sit xcepturi,voluptatem animi.ptatum cere quaerat omnis suscipit inventore consequatur! Totamanimi.ptatum maiores voluptas error ullam dolorem accusantium, itaque molestias ullam dolorem accusantium"
            ,img:unsplash_U2BI3GMnSSE
            } ]
    return ( 
         <div>
            <Navbar/>      
        <div  className="flex flex-col mt-10 px-4 lgm:px-[70px] " >
        <h1 className="font-bold text-lg">Discover diffrent <span className="text-[#0083fd] ">
       internships </span> </h1>
        
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
               <Internship   def={event.def} 
               name={event.name} type={event.type} img={event.img}  />
               </div> ))
           }
           </div> 
         
        </div>
      </div>
     );
}
 
export default Internships;