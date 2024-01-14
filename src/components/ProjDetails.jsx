import React, { Suspense, useEffect, useState } from 'react'
import pr1 from "../Images/p1.png";
import pr2 from "../Images/pr2.png";
import pr3 from "../Images/pr3.png";
import erd from "../Images/erd.png";
import erd2 from "../Images/erd2.png";
import github from "../Images/Icons/github.svg";

import react from "../Images/Icons/react.svg"
// import cpp from "../Images/Icons/cpp.svg"
// import nodejs from "../Images/Icons/nodejs.svg"
import flask from "../Images/Icons/flask.svg"
import mysql from "../Images/Icons/mysql.svg"
import python from "../Images/Icons/python.svg"
// import javascript from "../Images/Icons/javascript.svg"
import tailwind from "../Images/Icons/tailwind.svg"
import figma from "../Images/Icons/figma.svg"
import django from "../Images/Icons/django.svg"
import css from "../Images/Icons/css.svg"
import html from "../Images/Icons/html.svg"

import { useLocation, useParams, Link } from 'react-router-dom';
const ErLoader = React.lazy(() => import('./ErLoader'));


function ProjDetails({ setVisNavs }) {

   const data = {
      myPortfolio: {
         image: pr1,
         name: "My PortFolio",
         date: "20 January 2024",
         techStack: [react, tailwind, figma],
         desc: "Welcome to my professional portfolio, a dedicated space designed to showcase my skills, experiences, and creative journey. This platform is a reflection of my passion for Web Development and Designing, highlighting not only what I've accomplished but also the potential I bring to future endeavors.",

         features: null,
         challenges: ["Developing cool animations and setting up smooth navigation.", "Fixing Designing Errors"],
         dig: null,
         link: "https://github.com/VilBRabad/portFolio"
      },
      donateMe: {
         image: pr2,
         name: "Donate.me",
         date: "01 December 2023",
         techStack: [react, css, flask, mysql, figma],
         desc: "The project revolves around the vital domain of blood donation and management within a ReactJs and Flask framework. It facilitates the seamless interaction between hospitals, donors and normal users by providing a robust online platform. Hospitals and donors alike can register on the site, creating dedicated accounts to streamline the blood donation process. Donors have the added convenience of scheduling appointments for blood donations, while hospitals can efficiently manage and accept these appointments. The project incorporates an insightful dashboard feature for hospitals, enabling them to monitor the availability of blood units categorized by blood group. As an additional feature, regular users can access information regarding available blood units in their specific areas by entering the relevant area pin code. This project serves as a comprehensive exploration and implementation of advanced MySQL concepts, furthering our understanding of sophisticated database management systems.",

         features: ["User registration for hospitals and donors.", "Appointment booking functionality for blood donation.", "Dashboard for hospitals to manage and accept donor appointments.", "Real-time display of available blood units categorized by blood group.", "Area-specific blood unit availability for regular users through pin code entry.", "Pin code-based search functionality for users to view available blood units in specific areas."],

         challenges: ["Making appropriate Database and Designing it.", "Handling requests to server.", "Integrating MySQL Queries in server code.", "Implementing advanced MySQL queries i.e PL/SQL"],
         dig: erd2,
         link: "https://github.com/VilBRabad/blood-bank-system"
      },
      salesAnalysis: {
         image: pr3,
         name: "Big-Mart Sales Analysis",
         date: "29 May 2023",
         techStack: [django, python, mysql, html, css],
         desc: "This project focuses on the visualization of sales data for a fictional retail chain, Big Mart, using the Python programming language and the Matplotlib data visualization library. The main objective of this project is to provide insights into the sales trends of the retail chain using graphical representations such as line charts, bar charts, scatter plots, and histograms. The project first cleans and preprocesses the data to make it suitable for analysis and visualization. Then, using Matplotlib, the project creates various visualizations that can help stakeholders understand the sales trends of the retail chain. These visualizations include sales 4 by product category, sales by store size, sales by location, and sales trends over time. The project concludes by summarizing the insights gained from the visualizations and discussing the implications of these insights for the business. Overall, this project demonstrates the power of Python and Matplotlib for analyzing and visualizing complex datasets and providing valuable insights to businesses.",

         features: ["User can able to insert dataset.", "The System is able to generate graphical representation of inserted dataset.", "The system is be able to analyze sales data to identify trends, patterns and insights.", "It should analyze the data and give most profitable items & most loss-making items."],
         challenges: ["Implementation of backend to handle big data.", "Facing to handle generated graph images.", "Generating Insights correctly from excel data sheet."],
         dig: erd,
         link: "https://github.com/VilBRabad/Big-Mart-Sales-Visualization"
      },
   }

   const location = useLocation();
   const { name } = useParams();
   const [para, setPara] = useState(name);
   let exist = false;

   // Check if name exists
   if (name in data) exist = true;

   useEffect(() => {
      setVisNavs(true);
   }, [para]);

   useEffect(() => {
      window.scroll(0, 0);
      // window.addEventListener("scroll", )

   }, [location.pathname]);


   return (
      <div className="min-h-screen w-screen dark:text-white flex justify-center">
         {
            !exist ?
               <div className="min-h-screen text-3xl w-screen dark:text-white flex flex-col justify-center items-center gap-6">
                  <div className="bg-slate-500/30 p-4 flex items-center justify-center h-[4rem] w-[80%] md:w-[25rem] gap-4 rounded-lg">
                     <span className="no-underline text-2xl opacity-60">Project:</span>
                     <span className="underline truncate">{ name }</span>
                  </div>
                  <span className="">Page Not Found</span>
               </div>
               :
               <div className="relative my-8 h-[100%] w-[100%] lg:w-[60rem] flex flex-col items-center gap-8">
                  <div className="flex flex-col items-center sm:flex-row h-[30rem] sm:h-[20rem] w-[90%] justify-center gap-2 sm:gap-4">
                     <div data-aos="fade-in" data-aos-duration="2000" className="h-[28rem] w-[20rem] flex items-center justify-center sm:h-full sm:w-[45rem] bg-slate-950/10 bg-slate-950/10 dark:bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl p-6"><img src={ data[para].image } id="img" alt="" /></div>
                     <div className="h-full w-[20rem] sm:w-full flex flex-col gap-2 sm:gap-4">
                        <div data-aos="fade-left" data-aos-duration="1000" className="w-full h-[30%] flex items-center justify-between pl-4 text-xl font-semibold bg-slate-950/10 dark:bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl">
                           { data[para].name }
                           <Link to={ data[para].link } target="_blank"><img src={github} alt="" className="mr-6 h-12 dark:invert" /></Link>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" className="w-full h-[30%] flex justify-center md:justify-start items-center dark:text-white/50 md:pl-4 bg-slate-950/10 dark:bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl ">{ data[para].date }</div>
                        <div data-aos="fade-left" data-aos-duration="2000" className="w-full h-[30%] flex justify-center md:justify-start items-center md:pl-4 bg-slate-950/10 dark:bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl gap-4 overflow-x-scroll">
                           {
                              data[para].techStack.map((stack, index) =>
                                 <img className="text-3xl md:text-5xl" key={ index } src={ stack } alt="" />
                              )
                           }
                        </div>
                     </div>
                  </div>
                  <div data-aos="fade-in" data-aos-duration="1000" className="w-[90%] h-auto overflow-hidden bg-slate-950/10 dark:bg-[#D9D9D9]/10 backdrop-blur-md rounded-xl p-6">
                     <div className="flex flex-col lg:flex-row  gap-4 text-justify mt-8">
                        <span className="font-semibold">Description:</span>
                        { data[para].desc }
                     </div>
                     { !data[para].features ?
                        <></>
                        :
                        <div className="flex flex-col lg:flex-row gap-4 text-justify mt-8">
                           <span className="font-semibold">Features:</span>
                           <ol className="flex flex-col gap-2 ml-4 list-decimal">
                              { data[para].features.map((feat, index) =>
                                 <li key={ index }>{ feat }</li>
                              ) }
                           </ol>
                        </div>
                     }
                     <div className="flex flex-col lg:flex-row gap-4 text-justify mt-8">
                        <span className="font-semibold">Challenges:</span>
                        <ol className="flex flex-col gap-2 ml-4 list-decimal">
                           { data[para].challenges.map((chal, index) =>
                              <li key={ index }>{ chal }</li>
                           ) }
                        </ol>
                     </div>
                  </div>
                  {
                     !data[para].dig ?
                        <></>
                        :
                        <div data-aos="fade-in" data-aos-duration="1000" className="w-[90%] h-auto py-8 px-2 md:px-6 bg-slate-950/10 dark:bg-[#D9D9D9]/10 backdrop-blur-md  rounded-xl flex flex-col items-center gap-10">
                           <span className="text-md lg:text-2xl font-semibold">DIAGRAM</span>
                           <Suspense fallback={ <p>Loading....</p> }>
                              <ErLoader src={ data[para].dig } />
                           </Suspense>
                        </div>
                  }
               </div>
         }
      </div>
   )
}

export default ProjDetails
