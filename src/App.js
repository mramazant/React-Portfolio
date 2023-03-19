import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import WorkPage from "./pages/WorkPage";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
