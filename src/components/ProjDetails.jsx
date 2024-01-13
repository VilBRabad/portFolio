import React, { useEffect } from 'react'
import pr1 from "../Images/p1.png";
import { FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs, FaFigma} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import erd from "../Images/erd.png";
import { useLocation } from 'react-router-dom';


function ProjDetails({setVisNavs}) {
   useEffect(()=>{
      setVisNavs(true);
   }, []);

   const location = useLocation();

   useEffect(() => {
      window.scroll(0, 0);
   }, [location.pathname]);


   const data = {
      myPortfolio: {
         image: pr1,
         name: "Name",
         date: "23 December 2023",
         techStack: [<FaReact/>, <SiTailwindcss/>, <FaFigma/>],
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus fugiat a aliquam deserunt? Corrupti earum sequi in nobis voluptates? Ratione voluptates iusto deserunt ut necessitatibus mollitia, quis vel aperiam minus soluta? Reiciendis, qui nam. Soluta a quis harum laborum!",

         features: [ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestias!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita veritatis eveniet illum amet.", "Lorem ipsum dolor sit amet, consectetur adipisicing." ],
         challenges: [ "Lorem ipsum dolor sit amet consectetur. Dolore, molestias!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet, consectetur adipisicing. dolor sit amet conse." ],
         dig: erd
      },
      donateMe: {
         image: pr1,
         name: "Name",
         date: "23 December 2023",
         techStack: [<FaReact/>, <FaNodeJs/>, <SiTailwindcss/>],
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus fugiat a aliquam deserunt? Corrupti earum sequi in nobis voluptates? Ratione voluptates iusto deserunt ut necessitatibus mollitia, quis vel aperiam minus soluta? Reiciendis, qui nam. Soluta a quis harum laborum!",

         features: [ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestias!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita veritatis eveniet illum amet.", "Lorem ipsum dolor sit amet, consectetur adipisicing." ],
         challenges: [ "Lorem ipsum dolor sit amet consectetur. Dolore, molestias!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet, consectetur adipisicing. dolor sit amet conse." ],
         dig: erd
      },
      salesAnalysis: {
         image: pr1,
         name: "Name",
         date: "23 December 2023",
         techStack: [<FaReact/>, <FaNodeJs/>, <SiTailwindcss/>],
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus fugiat a aliquam deserunt? Corrupti earum sequi in nobis voluptates? Ratione voluptates iusto deserunt ut necessitatibus mollitia, quis vel aperiam minus soluta? Reiciendis, qui nam. Soluta a quis harum laborum!",

         features: [ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestias!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita veritatis eveniet illum amet.", "Lorem ipsum dolor sit amet, consectetur adipisicing." ],
         challenges: [ "Lorem ipsum dolor sit amet consectetur. Dolore, molestias!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet, consectetur adipisicing. dolor sit amet conse." ],
         dig: erd
      },
   }

   return (
      <div className="min-h-screen w-screen text-white flex justify-center">
         <div className="relative my-8 h-full w-[100%] lg:w-[60rem] flex flex-col items-center gap-8">
            <div className="flex flex-col items-center sm:flex-row h-[30rem] sm:h-[20rem] w-[90%] justify-center gap-2 sm:gap-4">
               <div className="h-[28rem] w-[20rem] flex items-center justify-center sm:h-full sm:w-[45rem] bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl p-6"><img src={data.myPortfolio.image} id="img" alt="" /></div>
               <div className="h-full w-[20rem] sm:w-full flex flex-col gap-2 sm:gap-4">
                  <div className="w-full h-[30%] flex items-center justify-between pl-4 text-xl font-semibold bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl">{data.myPortfolio.name} <FaGithub className="text-3xl mr-6"/></div>
                  <div className="w-full h-[30%] flex items-center text-white/50 pl-4 bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl">{data.myPortfolio.date}</div>
                  <div className="w-full h-[30%] flex items-center pl-4 bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl gap-4">
                     {
                        data.myPortfolio.techStack.map((stack, index)=>
                           <span className="text-5xl" key={index}>{stack}</span>
                        )
                     }
                  </div>
               </div>
            </div>
            <div className="w-[90%] h-auto overflow-hidden bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl p-6">
               <div className="flex flex-col lg:flex-row  gap-4 text-justify mt-8">
                  <span className="font-semibold">Description:</span>
                  {data.myPortfolio.desc}
               </div>
               <div className="flex flex-col lg:flex-row gap-4 text-justify mt-8">
                  <span className="font-semibold">Features:</span>
                  <ol className="flex flex-col gap-2 ml-4 list-decimal">
                     {data.myPortfolio.features.map((feat, index)=>
                        <li key={index}>{feat}</li>
                     )}
                  </ol>
               </div>
               <div className="flex flex-col lg:flex-row gap-4 text-justify mt-8">
                  <span className="font-semibold">Challenges:</span>
                  <ol className="flex flex-col gap-2 ml-4 list-decimal">
                     {data.myPortfolio.challenges.map((chal, index)=>
                        <li key={index}>{chal}</li>
                     )}
                  </ol>
               </div>
            </div>
            <div className="w-[90%] h-auto py-8 px-2 md:px-6 bg-[#D9D9D9]/10 backdrop-blur-md  rounded-xl flex flex-col items-center gap-10">
               <span className="text-md lg:text-2xl font-semibold">DIAGRAM</span>
               <img src={data.myPortfolio.dig} alt="" />
            </div>
         </div>
      </div>
   )
}

export default ProjDetails
