import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Infos from './components/Infos'
import Skills from './components/Skills'
import TimeLine from './components/TimeLine'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
function App() {

  return (
    <>
    <div className="relative cursor-none">
      <CustomCursor />
      <TopBar />
      <Main />  
      <AboutMe />   
      <Infos />
      <Skills />
      <TimeLine />
      <Projects />
      <Contact />
      <Footer />
    </div>
     </>
  )
}

export default App
