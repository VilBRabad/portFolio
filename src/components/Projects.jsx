import React, { useEffect } from 'react'
import { motion, useTransform } from 'framer-motion'
import {useInView} from 'react-intersection-observer';

function Projects() {

  // const {ref: firRef, inView: firstCard} = useInView();
  const {ref: secRef, inView: secondCard} = useInView();
  const {ref: thiRef, inView: thirdCard} = useInView();

  return (
    <div className={`relative text-white min-h-screen flex flex-col items-center`}>
      <span className="title font-bold">Projects</span>
      <div className={`relative container z-5 flex flex-col`}>
        <div className={`min-h-screen w-full flex justify-around items-center md:gap-8`}>
          <div className="projCard bg-gradient-to-b from-higherCardColor to-midCardColor">
            <div className="photo"></div>
            <div className="con">
              <div className="det">
                <div className="name"></div>
                <div className="stack"></div>
              </div>
              <div className="gitIcon"></div>
            </div>
          </div>
          <div  className="h-[25rem] w-[40rem] flex items-center justify-start">
            <div className="bg-red-300 h-10 w-44"></div>
          </div>
        </div>
        <div className={`min-h-screen w-full flex flex-row-reverse justify-around items-center ${secondCard?"bg-violet-950":""}`}>
          <div className="projCard bg-gradient-to-b from-higherCardColor to-midCardColor">
            <div className="photo"></div>
            <div className="con">
              <div className="det">
                <div className="name"></div>
                <div className="stack"></div>
              </div>
              <div ref={secRef} className="gitIcon"></div>
            </div>
          </div>
          <div  className="h-[25rem] w-[40rem] flex items-center justify-end">
            <div className="bg-red-300 h-10 w-44"></div>
          </div>
        </div>
        <div className={`min-h-screen w-full flex justify-around items-center  ${thirdCard?"bg-teal-950":""}`}>
          <div className="projCard bg-gradient-to-b from-higherCardColor to-midCardColor">
            <div className="photo"></div>
            <div className="con">
              <div className="det">
                <div className="name"></div>
                <div className="stack"></div>
              </div>
              <div ref={thiRef} className="gitIcon"></div>
            </div>
          </div>
          <div  className="h-[25rem] w-[40rem] flex items-center justify-start">
            <div className="bg-red-300 h-10 w-44"></div>
          </div>
        </div>
      </div>
      <div className="h-[76%] w-1 bg-slate-500 absolute top-28 z-3"></div>
      <div className="h-[1.5rem] w-[1.5rem] border-4 border-white bg-black absolute rounded-full top-28 z-3"></div>
      <div className="h-[1.5rem] w-[1.5rem] border-4 border-white bg-black absolute rounded-full top-[22.8rem]  z-3"></div>
    </div>
  )
}

export default Projects
