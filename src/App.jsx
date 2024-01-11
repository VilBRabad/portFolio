import { Fragment, useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import LastPage from './components/LastPage'
import {useInView} from 'react-intersection-observer';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ErrorPage from './components/ErrorPage';
import ProjDetails from './components/ProjDetails';



function App() {

  useEffect(()=>{
    Aos.init();
  },[])

  const [visible, setVisible] = useState(true);
  const {ref: homeRef, inView: homePage} = useInView();
  const {ref: aboutRef, inView: aboutPage} = useInView();
  const {ref: projectsRef, inView: projectsPage} = useInView();

  const [visNavs, setVisNavs] = useState(false);
  
  return (
    <>
    <Router>
    <Navbar visible={visible} visNavs={visNavs} setVisNavs={setVisNavs} views={{homePage, aboutPage, projectsPage}}/>
      <Routes>
        <Route exact path="/" element={
          [
            <Home setVisible={setVisible} homeRef={homeRef}/>,
            <About aboutRef={aboutRef}/>,
            <Projects projectsRef={projectsRef}/>,
            <LastPage/>
          ]
        }/>
        <Route exact path="/:path" element={<ErrorPage/>}/>
        <Route exact path="/details" element={<ProjDetails setVisNavs={setVisNavs}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
