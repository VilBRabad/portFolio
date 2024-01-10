import React, {useEffect, useState} from 'react'
import { FaGithub } from "react-icons/fa";
import { useRef } from 'react';
import {useInView} from 'react-intersection-observer';
import { motion } from "framer-motion"
import frontPhoto from "../Images/front-photo2.jpg";

function Home({setVisible}) {

  const {ref: myRef, inView: myElementVisible} = useInView();
  useEffect(()=>{
    setVisible(myElementVisible);
  }, [myElementVisible]);


  return (
    <div className="h-[91vh] w-screen relative z-2 flex items-center justify-center">
      <div className="relative container h-full w-full justify-center items-center flex text-white flex-col z-8">
        <img className="h-[81px] bg-black z-2 rounded-full" src={frontPhoto} alt="" />
        <span className="w-[85%] text-[3rem] font-bold z-3 text-center lg:text-[4rem]">Hello, I'm <span className="text-[#9D84FF]">Vilas Rabad</span></span>
        <span ref={myRef} className="text-[1.6rem] text-[#C5DFF8] mb-6 z-3">Web Developer (React)</span>
        <span className="w-[80%] text-center z-3 lg:w-[50%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maxime iure nam numquam dicta deleniti nobis culpa. Sunt, minima suscipit? it. Voluptas maxime iure nam numquam dicta deleniti nobis culpa. </span>
        <FaGithub className="absolute text-white text-3xl bottom-4 right-4"/>
      </div>
      <div className="colors absolute h-[20%] w-[20%] bg-[#F806CC] opacity-[20%] top-[35%] left-[45%] rounded-full blur-3xl z-1" />
      <div className="colors2 absolute h-[15%] w-[12%] bg-[#820D5D] opacity-[27%] top-[25%] left-[37%] rounded-full blur-3xl z-1"></div>
    </div>
  )
}

export default Home
