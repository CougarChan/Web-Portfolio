import React, {useEffect} from "react";
import {TiChevronRight} from "react-icons/ti"
import {Link} from "react-scroll"
import AOS from 'aos'
import "aos/dist/aos.css"
import { CiCircleList} from "react-icons/ci"
import Resume from "../assets/Resume.pdf"

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   <div className=" bg-[#0a192f]   flex items-center border-b-2 justify-evenly ">
   <div name='About-Me'className="   flex flex-row max-w-[1500px] w-full justify-between h-full items-center  ">
    <div className="  max-h-[900px] py-6 h-full ">
    <div data-aos= "fade-up" data-aos-duration="1000">
      <h1 className=" text-6xl  font-bold border-b-4 border-blue-600 w-2/4  text-slate-400">About Me </h1>
         <h2 className=" text-5xl font-bold text-slate-400 mt-6 ">My name is German Lopez</h2>
         <p className=" text-xl py-8 max-w-[700px]  text-white">Welcome to my Portfolio! I am a full-stack developer who specalize in a building applications, currently I am working with websites utililziing fullstack. Also Ive worked in building applications and using different frameworks. Thank you! Enjoy your time! </p>
         
        </div>
        <div className=" flex flex-col max-w-[700px]" data-aos="fade-right " data-aos-duration="1000">
         <p className="mb-8 font-bold text-white"> Currently looking for work in the miami area. Always will be looking for an oppurtonity to advance my programming pursuits.  </p>
         <span> <p className="font-bold text-white">My interest in technology has been a life long kink to me, Ive enjoyed how things function and the way that happens, but i really didnt think of programming as my career, but fast foward
          to the present, and I've become a lot more knowledge about programming and even graduated with a certification in Web Development. I love this community due to how advance you have to be to learn the 
          new material and keep up with it.</p></span> 
          <div data-aos="fade-right" data-aos-duration="1500" className="mt-10 px-3 py-3 rounded-r bg-white max-w-[300px]">  <h1 className=" text-2xl font-bold">Resume</h1> <a href="https://drive.google.com/file/d/1rWXeS1MKV9dP9Uz7Yl8ctdYngDhBFe4Z/view?usp=sharing" target="_blank"><CiCircleList size={120} className="my-6"></CiCircleList></a> 
          <a href={Resume} download="Resume"> <button className="bg-blue-500  text-white  rounded-md font-semibold p-1 hover:scale-105 transition duration-500">You can download my resume here!</button></a> </div>
        </div>
        <button className=" group transition ease-in-out text-white  bg-blue-500 hover:translate-y-2 hover:scale-100 hover:bg-blue-400 duration-300 items-center  rounded-md flex px-6 py-2 font-semibold mt-6 "> 
      <Link  to="Projects"  smooth={true}  duration={500} >
          Take me to your Projects
        </Link>
       <span className=" group-hover:rotate-90">
       <TiChevronRight className=" ml-2"/>
       </span>
       </button>
      </div>
    
    <div data-aos="fade-down" data-aos-duration="1000" className=" text-white mx-auto max-w-[700px] w-full max-h-[700px] h-full items-center rounded-md" >
      <div className="flex flex-col h-screen items-center"> 
      <h1 className=" font-bold py-4 border px-6 bg-black rounded-sm">Here are my top skills and languages</h1>
     <div className="max-w-[650px] mt-6 w-full flex flex-col max-h-[650px] items-center border bg-black rounded-md h-full">
           <div className="  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2 font-bold">HTML</h1>
        <div className="w-full  bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-full text-center text-xs leading-none text-white font-semibold">100%</div>
        </div>
      </div>

      <div className="  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2 font-medium ">CSS</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 rounded-r w-3/4 text-center text-xs leading-none text-white font-semibold">75%</div>
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">React.Js</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 rounded-r w-4/5 text-center text-xs leading-none text-white font-semibold"> 80%</div>
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">SQL</h1>
        <div className="w-full bg-gray-300 h-3 text-center"> 
          <div className="bg-blue-500 h-3 w-2/3 rounded-r text-center text-xs leading-none text-white font-semibold">66%
            
          </div>
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">REDUX</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-2/4 rounded-r text-center text-xs leading-none text-white font-semibold"> 50%</div>
        </div>
      </div>
      <div className="  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">MERN</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-2/3  rounded-r text-center text-xs leading-none text-white font-semibold">66%</div>
        </div>
      </div>
      <div className="  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">Express.js</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-3/4 rounded-r text-center text-xs leading-none text-white font-semibold">75%</div>
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">jQuery</h1>
            
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-4/5 rounded-r text-center text-xs leading-none text-white font-semibold">80%</div>
          
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">JavaScript</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-4/5 rounded-r text-center text-xs leading-none text-white font-semibold">80%</div>
        </div>
      </div>
         <button></button>
        </div>
      
      </div>


    </div>
    </div>
   
    </div>
    
   )
}
export default About;
