import { useState } from "react";
import Card from "./Card";

function Skills({ skills = [] }) {
  const [visible, setVisible] = useState(true);

  const defaultSkills = [
    "Modular Web and App Design",
    "Java GUI Development",
    "Workflow optimization and process mapping",
    "SQL and local dev environment optimization (Laragon)",
    "Creative branding and playlist curation",
    "Clear, user-focused communication",
  ];

  const skillList = skills.length > 0 ? skills : defaultSkills;

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Show/Hide Skills</button>
      <Card>
        <h2>Skills</h2>
        {visible && (
          <ul style={{ listStyleType: "none" }}>
            {skillList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}

export default Skills;