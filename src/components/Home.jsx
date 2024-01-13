import React, {useEffect, useState} from 'react'
import { FaGithub } from "react-icons/fa";
import { useRef } from 'react';
import {useInView} from 'react-intersection-observer';
import frontPhoto from "../Images/front-photo2.jpg";
import { Link } from 'react-router-dom';

function Home({setVisible, homeRef}) {

  const {ref: myRef, inView: myElementVisible} = useInView();
  useEffect(()=>{
    setVisible(myElementVisible);
  }, [myElementVisible]);


  return (
    <div  id="home" className="h-[91vh] w-screen relative z-2 flex items-center justify-center text-black dark:text-white overflow-x-hidden z-10">
      <div ref={homeRef} className="relative -mt-16 container h-full w-full justify-center items-center flex flex-col z-10">
        <img data-aos="fade-in" data-aos-duration="3000"  className="h-[81px] bg-black z-10 rounded-full" src={frontPhoto} alt="" />
        <span data-aos="fade-up" data-aos-duration="1000"  className="w-[85%] text-[3rem] font-bold z-3 text-center lg:text-[4rem]">Hello, I'm <span className="text-purple-500">Vilas Rabad</span></span>
        <span data-aos="fade-up" data-aos-duration="1500"  ref={myRef} className="text-[1.6rem] text-sky-800 font-semibold mb-6 z-3">Web Developer (React)</span>
        <span data-aos="fade-up" data-aos-duration="2000"  className="w-[80%] text-center z-8 lg:w-[50%]">Aspiring Tech Artist: Blending logic and creativity, I'm an IT whiz-in-training with a passion for weaving vibrant, user-friendly web experiences. Join me on the journey</span>
        <Link to="https://github.com/VilBRabad/portFolio" target="_blank"><FaGithub className="absolute text-black dark:text-white text-3xl bottom-0 right-4 lg:-bottom-4"/></Link>
      </div>
      <div className="colors absolute h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[25rem] bg-[#F806CC] opacity-[20%] top-[35%] left-[45%] rounded-full blur-3xl z-1" />
      <div className="colors2 absolute h-[15rem] w-[12rem] bg-[#820D5D] opacity-[27%] top-[25%] left-[37%] rounded-full blur-3xl z-1"></div>
    </div>
  )
}

export default Home
