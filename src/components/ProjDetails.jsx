import React, { useEffect } from 'react'

function ProjDetails({setVisNavs}) {

   useEffect(()=>{
      setVisNavs(true);
   }, []);


   const data = {
      image: "Image",
      name: "Name",
      date: "Date",
      techStack: "Tech Stack",
      desc: "Description",
      features: "Features",
      challenges: "Challenges",
      dig: "Diagram"
   }

   return (
      <div className="min-h-screen w-screen text-white flex justify-center">

         <div className="container my-8 h-full w-[90%] flex flex-col items-center gap-8">
            <div className="flex flex-col items-center md:flex-row h-[33rem] md:h-[20rem] w-[90%] justify-center gap-4">
               <div className="h-[28rem] w-[20rem] md:h-full md:w-[35rem] bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl">{data.image}</div>
               <div className="h-full w-full flex flex-col gap-4">
                  <div className="w-full h-[30%] bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl">{data.name}</div>
                  <div className="w-full h-[30%] bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl">{data.date}</div>
                  <div className="w-full h-[30%] bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl">{data.techStack}</div>
               </div>
            </div>
            <div className="w-[90%] h-[30rem] bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl">
               <div>{data.desc}</div>
               <div>{data.features}</div>
               <div>{data.challenges}</div>
            </div>
            <div className="w-[90%] h-[30rem] bg-[#D9D9D9]/10 backdrop-blur-md  rounded-xl">
               {data.dig}
            </div>
         </div>
      </div>
   )
}

export default ProjDetails
