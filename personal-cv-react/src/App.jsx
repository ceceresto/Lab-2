import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Card from "./components/card";
import './index.css';
import './images/profile.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "Modular Web and App Design",
    "Java GUI Development",
    "Workflow optimization and process mapping",
    "SQL and local dev environment optimization (Laragon)",
    "Creative branding and playlist curation",
    "Clear, user-focused communication",
  ];

const education = [
  { year: "2023-2028", program: "Bachelor of Science in Information Technology", school: "USTP – CDO Campus" },
  { year: "2023", program: "Senior High School", school: "Gusa Regional Science High School" },
  { year: "2021", program: "Junior High School", school: "St. Mary's Academy" },
  { year: "2017", program: "Elementary School", school: "St. Mary's Academy" }
];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
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