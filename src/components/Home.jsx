import React, {useEffect, useState} from 'react'
import { FaGithub } from "react-icons/fa";
import { useRef } from 'react';
import {useInView} from 'react-intersection-observer';
import frontPhoto from "../Images/front-photo2.jpg";

function Home({setVisible, homeRef}) {

  const {ref: myRef, inView: myElementVisible} = useInView();
  useEffect(()=>{
    setVisible(myElementVisible);
  }, [myElementVisible]);


  return (
    <div  id="home" className="h-[91vh] w-screen relative z-2 flex items-center justify-center overflow-hidden">
      <div ref={homeRef} className="relative -mt-16 container h-full w-full justify-center items-center flex text-white flex-col z-8">
        <img className="h-[81px] bg-black z-10 rounded-full" src={frontPhoto} alt="" />
        <span className="w-[85%] text-[3rem] font-bold z-3 text-center lg:text-[4rem]">Hello, I'm <span className="text-[#9D84FF]">Vilas Rabad</span></span>
        <span ref={myRef} className="text-[1.6rem] text-[#C5DFF8] mb-6 z-3">Web Developer (React)</span>
        <span className="w-[80%] text-center z-3 lg:w-[50%]">Aspiring Tech Artist: Blending logic and creativity, I'm an IT whiz-in-training with a passion for weaving vibrant, user-friendly web experiences. Join me on the journey</span>
        <a href="https://github.com/VilBRabad/portFolio" target="_blank"><FaGithub className="absolute text-white text-3xl bottom-0 right-4"/></a>
      </div>
      <div className="colors absolute h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[25rem] bg-[#F806CC] opacity-[20%] top-[35%] left-[45%] rounded-full blur-3xl z-1" />
      <div className="colors2 absolute h-[15rem] w-[12rem] bg-[#820D5D] opacity-[27%] top-[25%] left-[37%] rounded-full blur-3xl z-1"></div>
    </div>
  )
}

export default Home
