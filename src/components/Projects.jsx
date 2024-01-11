import React, { useEffect } from 'react'
import {useInView} from 'react-intersection-observer';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Projects({projectsRef}) {
  useEffect(()=>{
    Aos.init();
  },[])
  // const {ref: firRef, inView: firstCard} = useInView();
  // const {ref: secRef, inView: secondCard} = useInView();
  // const {ref: thiRef, inView: thirdCard} = useInView();

  return (
    <div ref={projectsRef} id="projects" className={`relative text-white min-h-screen flex flex-col items-center overflow-hidden`}>
      <span className="title font-bold">Projects</span>
      <div className={`relative mt-20 min-h-full w-full container z-5 flex flex-col`}>
        <div className={`relative mt-10 h-[80%] w-full mt-10 flex flex-col-reverse justify-center gap-2 items-center lg:items-start lg:flex-row lg:gap-10 xl:gap-20`}>
          <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-purple-800 bg-black absolute rounded-full -top-6 lg:top-[5%] left-[49.2%] max-md:left-[48%]  z-[11]"></div>
          <div data-aos="fade-right" data-aos-duration="1000" className="projCard bg-gradient-to-b from-higherCardColor to-midCardColor z-10 xl:w-[33rem]">
            <div className="photo"></div>
            <div className="con">
              <div className="det">
                <div className="name"></div>
                <div className="stack"></div>
              </div>
              <div className="gitIcon"></div>
            </div>
          </div>
          <div data-aos="fade-left" className="h-[3rem] w-full flex lg:h-full lg:mt-3 items-center justify-center z-10 lg:w-1/2 lg:justify-start xl:w-[33rem]">
            <div className="h-10 flex items-center text-2xl max-lg:bg-higherCardColor rounded-lg px-2">20 January 2024</div>
          </div>
        </div>

        <div className={`relative mt-20 h-[80%] w-full mt-10 flex flex-col-reverse justify-center gap-2 items-center lg:items-start lg:flex-row-reverse lg:gap-10 xl:gap-20`}>
          <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-purple-800 bg-black absolute rounded-full -top-6 lg:top-[5%] left-[49.2%] max-md:left-[48%]  z-[11]"></div>
          <div data-aos="fade-left" data-aos-duration="1000" className="projCard bg-gradient-to-b from-higherCardColor to-midCardColor z-10 xl:w-[33rem]">
            <div className="photo"></div>
            <div className="con">
              <div className="det">
                <div className="name"></div>
                <div className="stack"></div>
              </div>
              <div className="gitIcon"></div>
            </div>
          </div>
          <div data-aos="fade-right" className="h-[3rem] w-full flex items-center justify-center lg:mt-3 z-10 lg:w-1/2 lg:justify-end xl:w-[33rem]">
            <div className="h-10 flex items-center text-2xl max-lg:bg-higherCardColor rounded-lg px-2">03 March 2023</div>
          </div>
        </div>

        <div className={`relative mt-20 h-[80%] w-full mt-10 flex flex-col-reverse justify-center gap-2 items-center lg:items-start lg:flex-row lg:gap-10 xl:gap-20`}>
          <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-purple-800  bg-black absolute rounded-full -top-6 lg:top-[5%] left-[49.2%] max-md:left-[48%] z-[11]"></div>
          <div data-aos="fade-right" data-aos-duration="1000" className="projCard bg-gradient-to-b from-higherCardColor to-midCardColor z-10 xl:w-[33rem]">
            <div className="photo"></div>
            <div className="con">
              <div className="det">
                <div className="name"></div>
                <div className="stack"></div>
              </div>
              <div className="gitIcon"></div>
            </div>
          </div>
          <div data-aos="fade-left" className="h-[3rem] w-full flex items-center justify-center z-10 lg:mt-3 lg:w-1/2 lg:justify-start xl:w-[33rem]">
            <div className="h-10 flex items-center text-2xl max-lg:bg-higherCardColor rounded-lg px-2">14 November 2022</div>
          </div>
        </div>
      </div>
      <div className="h-[80%] w-1 bg-slate-500 absolute top-28 z-3"></div>
      <div className="h-[1.5rem] w-[1.5rem] border-4 border-white bg-black absolute rounded-full top-28 z-3"></div>
    </div>
  )
}

export default Projects
