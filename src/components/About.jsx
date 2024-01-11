import React from 'react'
import photo from "../Images/front-photo.png";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaPython} from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";

function About({aboutRef}) {
  

  return (
    <div id="about" className="about text-white min-h-screen flex flex-col items-center">
      <span className="title font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">About Me</span>
      <div className="container mt-6 min-h-full w-full flex flex-col justify-center items-center gap-4 lg:gap-0 lg:flex-row">
        <div className="w-full h-[15rem] flex flex-col items-center justify-center md:h-[20rem] lg:w-[34%] lg:h-full xl:w-[30%] 2xl:w-[25%]">
          <div className="w-[15rem] h-[15rem] backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-full md:w-[20rem] md:h-[20rem] overflow-hidden">
            <img src={photo} className="" alt="" />
          </div>
          {/* <div className="w-[20rem] h-[7rem] bg-red-400 rounded-3xl hidden lg:flex"></div> */}
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-4 lg:h-[90%] lg:w-[65%] 2xl:w-[55rem]">
          <div className="w-[90%] h-auto flex flex-col gap-4 lg:h-[70%] lg:w-full lg:flex-row">
            <div ref={aboutRef} className="w-[100%] h-[20rem] overflow-scroll lg:overflow-hidden backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-3xl lg:h-full lg:w-[67%] flex flex-col p-8">
              <span className="text-2xl font-semibold mb-6">Vilas Balu Rabad</span>
              <span className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae inventore sit optio est quidem ipsam nostrum eaque esse asperiores tempore illum deserunt ut ad, natus quibusdam placeat iste facere magnam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatem alias. Quis neque at exercitationem quibusdam animi? Recusandae doloribus aspernatur dolorum distinctio odio, earum quod debitis corrupti a pariatur architecto provident id, accusantium esse quis? Earum dicta ut distinctio officiis neque veritatis animi, ex quo odit hic eligendi recusandae quae.</span>
            </div>
            <div className="w-[100%] h-[10rem] flex gap-2 lg:flex-col lg:h-full lg:w-[31%]">
              <div className="w-1/2 h-full backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-3xl lg:h-[45%] lg:w-full p-4 text-lg font-semibold">
                <span>Connect With</span>
                <div className="flex mt-4 text-[3rem] md:text-[4rem] justify-around">
                  <FaXTwitter/>
                  <FaLinkedinIn/>
                </div>
              </div>
              <div className="w-1/2 h-full backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-3xl lg:h-[55%] lg:w-full p-4 text-lg font-semibold">
                <span>Skills</span>
                <div className="font-normal mt-4 text-sm md:text-lg flex flex-col justify-center gap-4 h-[60%]">
                  <span>Web Development</span>
                  <span>React Development</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[7rem] overflow-scroll lg:overflow-hidden flex items-center backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-3xl lg:w-full">
            <div className="h-full w-[100em] mx-4 gap-4 flex text-[3rem] md:text-[4rem] items-center justify-around ">
              <FaReact className="transition hover:text-blue-400"/>
              <FaNodeJs className="transition hover:text-green-600"/>
              <SiTailwindcss className="transition hover:text-blue-400"/>
              <SiFlask className="transition hover:text-cyan-500"/>
              <SiMysql className="transition hover:text-sky-700"/>
              <TbBrandCpp className="transition hover:text-sky-500"/>
              <IoLogoJavascript className="transition hover:text-yellow-400"/>
              <FaPython className="transition hover:text-yellow-300"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About
