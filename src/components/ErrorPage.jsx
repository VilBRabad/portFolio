import React from 'react'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="h-screen w-screen dark:text-white relative flex flex-col items-center justify-center z-10 overflow-hidden">
      <span className="text-[30rem] font-bold opacity-10 z-10">404</span>
      <span className="absolute font-bold text-4xl z-10">Page Not Found</span>
      <Link to="/" className="absolute top-[55%] z-10"><button className="text-lg h-10 w-20 rounded-md transition bg-purple-800 hover:bg-purple-700 border-md">Home</button></Link>
      <div className="colors absolute h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[25rem] bg-[#F806CC] opacity-[20%] top-[35%] left-[45%] rounded-full blur-3xl z-1" />
      <div className="colors2 absolute h-[15rem] w-[12rem] bg-[#820D5D] opacity-[27%] top-[25%] left-[37%] rounded-full blur-3xl z-1"></div>
    </div>
  )
}

export default ErrorPage
