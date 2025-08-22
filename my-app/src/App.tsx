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
  <main id="main"><Main /></main>
  <section id="about"><AboutMe /></section>
  <section id="infos"><Infos /></section>
  <section id="skills"><Skills /></section>
  <section id="timeline"><TimeLine /></section>
  <section id="work"><Projects /></section>
  <section id="contact"><Contact /></section>
  <Footer />
    </div>
     </>
  )
}

export default App
