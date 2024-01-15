import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer';
import frontPhoto from "../Images/front-photo2.jpg";
import { Link } from 'react-router-dom';
import github from "../Images/Icons/github.svg";

function Home({setVisible, homeRef}) {

  const {ref: myRef, inView: myElementVisible} = useInView();
  useEffect(()=>{
    setVisible(myElementVisible);
  }, [myElementVisible]);


  return (
    <>
    <div  id="home" className="h-[91vh] w-screen relative flex items-center justify-center text-black dark:text-white overflow-x-hidden">
      <div ref={homeRef} className="relative -mt-16 container h-full w-full justify-center items-center flex flex-col z-10">
        {/* <img data-aos="fade-in" data-aos-duration="3000"  className="h-[81px] bg-black brightness-125 z-10 rounded-full" src={frontPhoto} alt="" /> */}
        <span data-aos="fade-up" data-aos-duration="1000"  className="w-[85%] text-[1.4rem] min-[376px]:text-[1.6rem] font-bold z-3 text-center lg:text-[2rem] dark:text-white/50 text-black/50">Welcome to my portfolio! <p className="dark:text-white text-black flex items-center justify-center flex-wrap text-[2.4rem] min-[376px]:text-[2.6rem] lg:text-[4rem] gap-0 min-[350px]:gap-4">I'm <span className="text-purple-500">Vilas Rabad</span></p></span>
        <span data-aos="fade-up" data-aos-duration="1500"  ref={myRef} className="text-[1.3rem] min-[330px]:text-[1.6rem] text-sky-800 font-semibold mb-6 z-3">Web Developer (React)</span>
        <span data-aos="fade-up" data-aos-duration="2000"  className="w-[80%] text-sm md:text-lg text-center z-8 lg:w-[50%]">Aspiring Tech Artist: Blending logic and creativity, I'm an IT whiz-in-training with a passion for weaving vibrant, user-friendly web experiences. Join me on the journey</span>
        <Link to="https://github.com/VilBRabad/portFolio" target="_blank"><img src={github} alt="" className="absolute h-11 dark:invert -bottom-3 right-4 lg:-bottom-4"/></Link>
      </div>
    <div className="colors absolute h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[25rem] bg-[#F806CC] opacity-[20%] top-[35%] left-[45%] rounded-full blur-3xl z-1" />
    <div className="colors2 absolute h-[15rem] w-[12rem] bg-[#820D5D] opacity-[27%] top-[25%] left-[37%] rounded-full blur-3xl z-1"></div>
    </div>
    </>
  )
}

export default Home
