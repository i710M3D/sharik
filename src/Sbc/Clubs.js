import { BsSearch , BsFilter } from "react-icons/bs" ;
import Club from "./Club";
import Cap from "../images/Cap.png"
import His from "../images/His.png"
import McIncub from "../images/McIncub.png"
import Navbar from "./Navbar";
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
// this componant is used for clubs and internshups
const Clubs = ({Type,Placeholder,Btn}) => {
  const Clubs=[ 
      {id:0,
      name:"Micro Club",
       def:"Micro Club is a scientific student club and a nonprofit organization that aims at popularizing computer science, IT and technology fields among the student community"
       ,type:"Scientific club"
       ,img:McIncub
      },

      {id:1,
         name:"CSE",
          def:"CSE club is one of the largest scientific clubs in Algeria. Working since 2008, thier main goal is to offer original and innovative content."
          ,type:"Scientific club"
          ,img:His
         },

         {id:2,
            name:"CAP",
             def:"Le Club d’Activités Polyvalentes (CAP), est un club estudiantin veillant à animer et dynamiser la vie au sein et en dehors de l’école ."
             ,type:"Polyvalent activities"
             ,img:Cap
            },
             {id:3,
      name:"Micro Club",
       def:"Micro Club is a scientific student club and a nonprofit organization that aims at popularizing computer science, IT and technology fields among the student community"
       ,type:"Scientific club"
       ,img:McIncub
      },

      {id:4,
         name:"CSE",
          def:"CSE club is one of the largest scientific clubs in Algeria. Working since 2008, thier main goal is to offer original and innovative content."
          ,type:"Scientific club"
          ,img:His
         },

         {id:5,
            name:"CAP",
             def:"Le Club d’Activités Polyvalentes (CAP), est un club estudiantin veillant à animer et dynamiser la vie au sein et en dehors de l’école ."
             ,type:"Polyvalent activities"
             ,img:Cap
            },
   ]
   const trainings=[ 
      {id:0,
      name:"Graphic Design advanced",
       def:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
       ,type:"Online"
       ,img:img1
      },

      {id:1,
         name:"Introduction UI/UX",
          def:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          ,type:"Online"
          ,img:img2
         },

         {id:2,
            name:"Front-end full training",
             def:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
             ,type:"irl"
             ,img:img1
            },
             {id:3,
      name:"Introduction UI/UX",
       def:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
       ,type:"Online"
       ,img:img2
      },

      {id:4,
         name:"Graphic Design advanced",
          def:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          ,type:"irl"
          ,img:img1
         },

         {id:5,
            name:"Front-end full training",
             def:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
             ,type:"irl"
             ,img:img2
            },
   ]
    return ( 
         <div>
            <Navbar/>
        <div  className="flex flex-col mt-10 px-8 " >
        <h1 className="font-bold text-lg">Discover diffrent <span className="text-[#0083fd] ">
        {Type }</span> </h1>
        
        <div id="search" className=" mt-10 relative self-center md:flex md:items-center md:gap-5 md:w-full md:mt-5 ">
           <input type="text" placeholder={Placeholder}
           className="rounded-[9px] pl-[60px] border-[#ddd] border-solid border h-[50px] w-[600px] md:w-[95%]" />
           <BsSearch className="absolute left-[4%] top-[35%]  "></BsSearch>
           {Btn &&  <BsFilter className="absolute mdm:right-[3%] text-4xl p-1 text-white mdm:top-[16%] h-[35px] w-[35px]
           rounded-[50%] bg-[#0083fd] md:relative md:rounded-[9px] md:p-2 md:font-bold md:w-[85px] md:text-5xl md:h-[50px] " >   </BsFilter>  }
        </div>
        
       {Type!=="trainings" && <div className="grid grid-cols-3 gap-8 my-20 grid-cols lg:grid-cols-2 lg:gap-8 md:flex md:flex-col md:gap-11  ">
           { Clubs.map(club=>(
               <div key={club.id} >
               <Club   def={club.def} 
               name={club.name} type={club.type} img={club.img}  />
               </div> ))
           }
           </div>}
           {Type==="trainings" && <div className="grid grid-cols-3 gap-8 my-20 grid-cols lg:grid-cols-2 lg:gap-8 md:flex md:flex-col md:gap-11  ">
           { trainings.map(training=>(
               <div key={training.id} >
               <Club   def={training.def} 
               name={training.name} type={training.type} img={training.img}  />
               </div> ))
           }
           </div>}
         
        </div>
         </div>
     );
}
 
export default Clubs;