import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import LastPage from './components/LastPage'
import {useInView} from 'react-intersection-observer';

function App() {

  const [visible, setVisible] = useState(true);
  const {ref: homeRef, inView: homePage} = useInView();
  const {ref: aboutRef, inView: aboutPage} = useInView();
  const {ref: projectsRef, inView: projectsPage} = useInView();

  // useEffect(()=>{
  //   console.log(aboutPage);
  // }, [aboutPage])
  
  return (
    <>
      <Navbar visible={visible} views={{homePage, aboutPage, projectsPage}}/>
      <Home setVisible={setVisible} homeRef={homeRef}/>
      <About aboutRef={aboutRef}/>
      <Projects projectsRef={projectsRef}/>
      <LastPage/>
    </>
  )
}

export default App
