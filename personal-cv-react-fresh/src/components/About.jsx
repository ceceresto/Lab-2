import Card from "./Card";
import profilePhoto from "../images/profile.jpg";

function About() {
  return (
    <Card>
      <h2>About Me</h2>
      <img src={profilePhoto} alt="Profile photo" />
      <p>
        Email: <a href="mailto:cabangbang.krismargette7@gmail.com">cabangbang.krismargette7@gmail.com</a><br />
        GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a>
      </p>
      <p>
        IT student skilled in modular web/app design, Java GUI, and workflow optimization.
      </p>
      <p>
        Experienced in Git/GitHub version control and troubleshooting, with a creative edge in branding and playlist curation. Combines technical precision with clear, user-focused communication.
      </p>
    </Card>
  );
}

export default About;