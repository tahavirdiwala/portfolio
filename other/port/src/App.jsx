import './App.css'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

function App() {
  const [{ themeName }] = useContext(ThemeContext)

  return (
     <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
