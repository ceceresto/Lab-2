import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
   <><button onClick={() => setVisible(!visible)}>Show/Hide Skills</button><section className="card">

          <h2>Skills</h2>
          {visible && (
              <ul style={{ listStyleType: "none" }}>
                  <li>Modular Web and App Design</li>
                  <li>Java GUI Development</li>
                  <li>Workflow optimization and process mapping</li>
                  <li>SQL and local dev environment optimization (Laragon)</li>
                  <li>Creative branding and playlist curation</li>
                  <li>Clear, user-focused communication</li>
              </ul>
          )}
      </section></>
  );
}

export default Skills;