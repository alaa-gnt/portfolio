import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Infos from './components/Infos'
import Skills from './components/Skills'

function App() {

  return (
    <>
    <div>
      <TopBar />
      <Main />  
      <AboutMe />   
      <Infos />
      <Skills/>
      
    </div>
     </>
  )
}

export default App
