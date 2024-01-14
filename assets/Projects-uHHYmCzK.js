import{b as h,r as i,j as a,L as o,g as r}from"./index-adZ_10Pc.js";import{p as j,a as p,b as x}from"./pr3-rrJdMcfy.js";function f({projectRef:n}){const s=h(),[l,c]=i.useState(0),t=i.useCallback(()=>{const d=window.innerHeight,m=window.innerWidth||document.documentElement.clientWidth;let e=0;m<764?e=Math.max(0,window.scrollY-d-500):e=Math.max(0,window.scrollY-d-240),e!==l&&c(Math.round(e))},[]);return i.useEffect(()=>(window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)),[t]),a.jsxs("div",{id:"projects",className:"relative dark:text-white min-h-screen flex flex-col items-center overflow-hidden",children:[a.jsx("span",{className:"title font-bold",children:"Projects"}),a.jsxs("div",{ref:n,className:"relative mt-20 min-h-full w-full container z-5 flex flex-col",children:[a.jsxs("div",{className:"mt-10 proj lg:flex-row",children:[a.jsx("div",{className:"dotClass",children:a.jsx("div",{"data-aos":"fade","data-aos-duration":"1000",className:"projDot"})}),a.jsxs("div",{"data-aos":"fade-right","data-aos-duration":"1000",className:"projCard",children:[a.jsx("div",{onClick:()=>s("/project/myPortfolio"),className:"photo cursor-pointer",children:a.jsx("img",{src:j,className:"h-full w-[27rem]",alt:""})}),a.jsxs("div",{className:"con",children:[a.jsxs("div",{className:"det",children:[a.jsx("div",{onClick:()=>s("/project/myPortfolio"),className:"name cursor-pointer",children:"My PortFolio"}),a.jsx("div",{className:"stack",children:"React.Js | Tailwind | Figma"})]}),a.jsx("div",{className:"gitIcon",children:a.jsx(o,{to:"https://github.com/VilBRabad/portFolio",target:"_blank",children:a.jsx("img",{src:r,alt:"",className:"dark:invert"})})})]})]}),a.jsxs("div",{className:"projInfo lg:items-start",children:[a.jsx("div",{"data-aos":"fade-left",className:"projDate",children:"20 January 2024"}),a.jsx("div",{"data-aos":"fade-left","data-aos-duration":"1000",className:"shortDetail ml-4",children:"Welcome to my professional portfolio, a dedicated space designed to showcase my skills, experiences, and creative journey. This platform is a reflection of my passion for Web Development and Designing, highlighting not only what I've accomplished but also the potential I bring to future endeavors."})]})]}),a.jsxs("div",{className:"mt-20 proj lg:flex-row-reverse",children:[a.jsx("div",{className:"dotClass",children:a.jsx("div",{"data-aos":"fade","data-aos-duration":"1000",className:"projDot"})}),a.jsxs("div",{"data-aos":"fade-left","data-aos-duration":"1000",className:"projCard",children:[a.jsx("div",{onClick:()=>s("/project/donateMe"),className:"photo",children:a.jsx("img",{className:"w-[27rem] cursor-pointer",src:p,alt:""})}),a.jsxs("div",{className:"con",children:[a.jsxs("div",{className:"det",children:[a.jsxs("div",{onClick:()=>s("/project/donateMe"),className:"name cursor-pointer",children:["Donate.me | ",a.jsx("span",{className:"opacity-70 ",children:"Blood Bank"})]}),a.jsx("div",{className:"stack",children:"React.JS | CSS | Flask | MySQL | Figma"})]}),a.jsx("div",{className:"gitIcon",children:a.jsx(o,{to:"https://github.com/VilBRabad/blood-bank-system",target:"_blank",children:a.jsx("img",{src:r,alt:"",className:"dark:invert"})})})]})]}),a.jsxs("div",{className:"projInfo lg:items-end",children:[a.jsx("div",{"data-aos":"fade-right",className:"projDate",children:"01 December 2024"}),a.jsx("div",{"data-aos":"fade-right","data-aos-duration":"1000",className:"shortDetail mr-4",children:"The project revolves around the vital domain of blood donation and management within a ReactJs and Flask framework. It facilitates the seamless interaction between hospitals, donors and normal users by providing a robust online platform. Hospitals and donors alike can register on the site, creating dedicated accounts to streamline the blood donation process...."})]})]}),a.jsxs("div",{className:"mt-20 proj lg:flex-row",children:[a.jsx("div",{className:"dotClass",children:a.jsx("div",{"data-aos":"fade","data-aos-duration":"1000",className:"projDot"})}),a.jsxs("div",{"data-aos":"fade-right","data-aos-duration":"1000",className:"projCard",children:[a.jsx("div",{onClick:()=>s("/project/salesAnalysis"),className:"photo cursor-pointer",children:a.jsx("img",{className:"w-[25rem]",src:x,alt:""})}),a.jsxs("div",{className:"con",children:[a.jsxs("div",{className:"det",children:[a.jsx("div",{onClick:()=>s("/project/salesAnalysis"),className:"name cursor-pointer",children:"Big-Mart Sales Visualizer"}),a.jsx("div",{className:"stack",children:"Django | Python | HTML | CSS"})]}),a.jsx("div",{className:"gitIcon",children:a.jsx(o,{to:"https://github.com/VilBRabad/Big-Mart-Sales-Visualization",target:"_blank",children:a.jsx("img",{src:r,alt:"",className:"dark:invert"})})})]})]}),a.jsxs("div",{className:"projInfo lg:items-start",children:[a.jsx("div",{"data-aos":"fade-left",className:"projDate",children:"29 May 2023"}),a.jsx("div",{"data-aos":"fade-left","data-aos-duration":"1000",className:"shortDetail ml-4",children:"This project focuses on the visualization of sales data for a fictional retail chain, Big Mart, using the Python programming language and the Matplotlib data visualization library. The main objective of this project is to provide insights into the sales trends of the retail chain using graphical representations such as line charts, bar charts, scatter plots, and histograms."})]})]})]}),a.jsx("div",{style:{height:l},className:" w-1 bg-slate-500 absolute top-28 z-3"}),a.jsx("div",{"data-aos":"fade","data-aos-duration":"1000",className:"h-[1.5rem] w-[1.5rem] border-4 border-black dark:border-white bg-purple-900 dark:bg-black absolute rounded-full top-28 z-3"})]})}export{f as default};
