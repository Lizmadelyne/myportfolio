import { Navbar } from '../src/components/NavBar/NavBar';
import { About } from '../src/components/About Section/About'
import { Contact } from '../src/components/Contact section/Contact';
import { Home } from '../src/components/Home section/Home';
import { Skills } from '../src/components/Skill section/Skills';
import { Projects } from '../src/components/Project section/Project';
import { Footer } from '../src/components/Footer/Footer';

import './App.css'

function App() {
  return(
    <div>
    <Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>


    </div>


  )

}

export default App
