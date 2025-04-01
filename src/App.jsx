import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/About'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
