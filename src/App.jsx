import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/About'
import Projects from './components/projects'

function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About/>
        <Projects/>
      </div>
    </>
  )
}

export default App
