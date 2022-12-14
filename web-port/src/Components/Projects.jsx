import React from "react";
import { data } from "../Data/data";
import { Link } from "react-scroll";
import { TiChevronRight } from "react-icons/ti";

const Project =() => {

        const work= data;

 return(
    <div name="Projects" className=" bg-[#0a192f] md:h-screen border-b-2 w-full ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
             <div className="pb-12">
            <h1 className="m-4 text-4xl flex border-b-5 border-b-blue-500 border-b-4 font-extrabold text-gray-300 "  >These are some of the projects that I have worked on and completed</h1>
              </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          
          {work.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div transition ease-out duration-500 "
  >
   
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
      
        <a href={item.github} target="blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>

        <a href={item.live} target="blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
<div className=" m-auto ">
<button className=" group transition ease-in-out text-white max-w-md   bg-blue-500 hover:translate-y-2 hover:scale-100 hover:bg-blue-400 duration-300 items-center  rounded-md flex px-6 py-2 font-semibold mt-6 "> 
      <Link  to="Contact"  smooth={true}  duration={500} >
          Take me to your Contact Page!
        </Link>
       <span className=" group-hover:rotate-90">
       <TiChevronRight className=" ml-2"/>
       </span>
       </button>
       </div>
      </div>
    </div>
  );
};



export default Project