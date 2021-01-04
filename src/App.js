import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Aboutme from "./components/Aboutme"
import GoToUpButton from './components/GoToUpButton';
import Contact from "./components/Contact"
import Footerbar from "./components/Footerbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Aboutme />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <GoToUpButton />
    <Footerbar />
    </div>
  );
}

export default App;
