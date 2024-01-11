import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function LastPage() {

  const handleClick = async() => {
    window.open(
      'https://mail.google.com/mail/?view=cm&to=rabadvilas11@gmail.com&su=For Hiring&body=',
      '_blank'
    );
  };

  return (
    <div className="h-[100vh] w-screen relative text-white flex justify-center items-center overflow-hidden">
      <div className="container flex flex-col h-full w-full justify-center items-center relative max-md:w-[90%]">
         <span className="text-xl font-bold">VILAS.</span>
         <span className="text-[3rem] text-center font-bold lg:text-[3rem] max-sm:text-[1.4rem]">Thank You for Visiting</span>
         <div className="flex gap-4 max-sm:flex-wrap max-sm:justify-center max-sm:gap-2">
            <div onClick={handleClick} className="w-[12rem] h-12 cursor-pointer bg-[#9A00E3] m-4 rounded-md border-2 border-slate-500 flex justify-center items-center text-black text-lg font-semibold transition-all duration-300 ease-in-out hover:text-white hover:bg-transparent z-10 max-sm:m-0 max-sm:mt-4">Lets Work Together</div>
            <a href="#projects" className="w-[8rem] h-12 z-10"><div className="w-full h-full cursor-pointer mt-4 rounded-md border-2 border-slate-500 flex justify-center items-center text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-[#9A00E3] hover:text-black max-sm:m-0 max-sm:mt-4">My Work</div></a>
         </div>
         <div className="contact z-10 text-md italic opacity-60 flex items-center gap-1">
          <CgMail className="text-2xl"/><span>rabadvilas11@gmail.com</span>
         </div>
        <div className="Top absolute w-12 h-12 flex items-center justify-center text-3xl border-2 bottom-4 lg:right-4 rounded-full">
          <a href="#home"><FaArrowUp/></a>
        </div>
      </div>
      <div className="colors absolute h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[25rem] bg-[#F806CC] opacity-[20%] top-[35%] left-[45%] rounded-full blur-3xl z-2" />
      <div className="colors2 absolute h-[15rem] w-[12rem] bg-[#820D5D] opacity-[27%] top-[25%] left-[37%] rounded-full blur-3xl z-2"></div>
      {/* <div className="absolute w-[90%] h-[30rem] bg-slate-300 z-20"></div> */}
    </div>
  )
}

export default LastPage
