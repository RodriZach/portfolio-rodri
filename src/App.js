import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar.jsx'
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <About/>
     
     <Skills/>
     
     <Projects/>
     
    </div>
  );
}

export default App;
