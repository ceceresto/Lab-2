import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import './index.css';
import './images/profile.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
      <footer>
        <p style={{ textAlign: "center" }}>
          &copy; 2026 Kris Margette C. Cabangbang. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;