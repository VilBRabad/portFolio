import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import LastPage from './components/LastPage'

function App() {

  const [visible, setVisible] = useState(true);
  // console.log(visible);
  return (
    <>
      <Navbar visible={visible}/>
      <Home setVisible={setVisible}/>
      <About/>
      <Projects/>
      {/* <AnimeTest/> */}
      <LastPage/>
    </>
  )
}

export default App
