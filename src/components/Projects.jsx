import React, {useState, useEffect } from 'react'
import pr1 from "../Images/p1.png";
import pr2 from "../Images/pr2.png";
import pr3 from "../Images/pr3.png";
import { FaGithub } from "react-icons/fa";
import { Link, redirect, useNavigate } from 'react-router-dom';

function Projects({projectRef}) {

  const navigate = useNavigate();


  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const newHeight = Math.max(0, window.scrollY - pageHeight - 240);
      if (newHeight !== height) {
        setHeight(Math.round(newHeight));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <div id="projects" className={`relative text-white min-h-screen flex flex-col items-center overflow-hidden`}>
      <span className="title font-bold">Projects</span>
      <div ref={projectRef} className={`relative mt-20 min-h-full w-full container z-5 flex flex-col`}>
        <div className={`relative mt-10 h-[80%] w-full mt-10 flex flex-col-reverse justify-center gap-2 items-center lg:items-start lg:flex-row lg:gap-10 xl:gap-20`}>
          <div className="absolute w-full flex justify-center -top-5 lg:top-5">
            <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-purple-800 bg-black rounded-full  z-[11]"></div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="projCard bg-gradient-to-b from-higherCardColor to-midCardColor z-10 xl:w-[33rem]">
            <div onClick={()=> navigate("/project/details")} className="photo cursor-pointer">
              <img src={pr1} className="h-full w-[27rem]" alt="" />
            </div>
            <div className="con">
              <div className="det">
                <div onClick={()=> navigate("/project/details")} className="name cursor-pointer">My PortFolio</div>
                <div className="stack">React.Js | Tailwind | Figma</div>
              </div>
              <div className="gitIcon"><Link to="https://github.com/VilBRabad/portFolio" target="_blank"><FaGithub/></Link></div>
            </div>
          </div>
          <div data-aos="fade-left" className="h-[3rem] w-full flex lg:h-full lg:mt-3 items-center justify-center z-10 lg:w-1/2 lg:justify-start xl:w-[33rem]">
            <div className="h-10 flex items-center text-lg lg:text-2xl max-lg:bg-higherCardColor rounded-lg px-2 backdrop-blur-sm">20 January 2024</div>
          </div>
        </div>

        <div className={`relative mt-20 h-[80%] w-full mt-10 flex flex-col-reverse justify-center gap-2 items-center lg:items-start lg:flex-row-reverse lg:gap-10 xl:gap-20`}>
          <div className="absolute w-full flex justify-center -top-5 lg:top-5">
            <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-purple-800 bg-black rounded-full  z-[11]"></div>
          </div>
          <div onClick={()=> navigate("/project/details")} data-aos="fade-left" data-aos-duration="1000" className="projCard cursor-pointer bg-gradient-to-b from-higherCardColor to-midCardColor z-10 xl:w-[33rem]">
            <div className="photo">
              <img className="w-[27rem]" src={pr2} alt="" />
            </div>
            <div className="con">
              <div className="det">
                <div className="name">Donate.me | <span className="opacity-70">Blood Bank</span></div>
                <div className="stack">React.JS | CSS | Flask | MySQL | Figma</div>
              </div>
              <div className="gitIcon"><FaGithub/></div>
            </div>
          </div>
          <div data-aos="fade-right" className="h-[3rem] w-full flex items-center justify-center lg:mt-3 z-10 lg:w-1/2 lg:justify-end xl:w-[33rem]">
            <div className="h-10 flex items-center text-lg lg:text-2xl max-lg:bg-higherCardColor rounded-lg px-2 backdrop-blur-sm">03 March 2023</div>
          </div>
        </div>

        <div className={`relative mt-20 h-[80%] w-full mt-10 flex flex-col-reverse justify-center gap-2 items-center lg:items-start lg:flex-row lg:gap-10 xl:gap-20`}>
          <div className="absolute w-full flex justify-center -top-5 lg:top-5">
            <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-purple-800 bg-black rounded-full  z-[11]"></div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="projCard  bg-gradient-to-b from-higherCardColor to-midCardColor z-10 xl:w-[33rem]">
            <div onClick={()=> navigate("/project/details")}  className="photo cursor-pointer">
              <img className="w-[25rem]" src={pr3} alt="" />
            </div>
            <div className="con">
              <div className="det">
                <div onClick={()=> navigate("/project/details")}  className="name">Big-Mart Sales Visualizer</div>
                <div className="stack">Django | Python | HTML | CSS</div>
              </div>
              <div className="gitIcon"><Link to="https://github.com/VilBRabad/Big-Mart-Sales-Visualization" target="_blank"><FaGithub/></Link></div>
            </div>
          </div>
          <div data-aos="fade-left" className="h-[3rem] w-full flex items-center justify-center z-10 lg:mt-3 lg:w-1/2 lg:justify-start xl:w-[33rem]">
            <div className="h-10 flex items-center text-lg lg:text-2xl max-lg:bg-higherCardColor rounded-lg px-2 backdrop-blur-sm">14 November 2022</div>
          </div>
        </div>
      </div>
      <div style={{height: height}} className={`h-[${height}px] w-1 bg-slate-500 absolute top-28 z-3`}></div>
      <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-white bg-black absolute rounded-full top-28 z-3"></div>
    </div>
  )
}

export default Projects
