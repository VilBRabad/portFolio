import React from 'react'

function LastPage() {
  return (
    <div className="h-[100vh] w-screen relative text-white flex justify-center items-center">
      <div className="container flex flex-col h-full w-full justify-center items-center relative ">
         <span className="text-xl font-bold">VILAS.</span>
         <span className="text-[3rem] text-center font-bold lg:text-[4rem]">Thank You for Visiting</span>
         <div className="flex gap-4">
            <div className="w-[8rem] h-12 cursor-pointer bg-gradient-to-r from-slate-700 to-teal-400 m-4 rounded-md border-2 border-slate-500 flex justify-center items-center text-black text-lg font-semibold transition-all duration-300 ease-in-out hover:text-white hover:bg-none z-10">Hire Me</div>
            <div className="w-[8rem] h-12 cursor-pointer m-4 rounded-md border-2 border-slate-500 flex justify-center items-center text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-teal-600 hover:text-black z-10">My Work</div>
         </div>
        <div className="Top absolute w-12 h-12 bg-slate-300 bottom-4 right-4 rounded-full"></div>
      </div>
      <div className="colors absolute h-[20%] w-[20%] bg-[#F806CC] opacity-[20%] top-[35%] left-[45%] rounded-full blur-3xl z-2" />
      <div className="colors2 absolute h-[15%] w-[12%] bg-[#820D5D] opacity-[27%] top-[25%] left-[37%] rounded-full blur-3xl z-2"></div>
    </div>
  )
}

export default LastPage
