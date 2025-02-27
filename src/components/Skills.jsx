import { useState } from "react";
import "/src/Skills.css";

function Skills() {
  const [flipped, setFlipped] = useState(false);
  const [flippedSecond, setFlippedSecond] = useState(false);

  const toggleFlip = () => {
    if (!flipped) {
      setFlipped(true);
    } else if (!flippedSecond) {
      setFlippedSecond(true);
    } else {
      // Reset to first page (Frontend) when clicking on Others (last card)
      setFlipped(false);
      setFlippedSecond(false);
    }
  };

  return (
    <section id="skills" className="skills-container">
      <h1 className="skills-heading">My Skills</h1>
      <div
        className={`skills-cards ${flipped ? "flipped" : ""} ${
          flippedSecond ? "flipped-second" : ""
        }`}
        onClick={toggleFlip}
      >
        {/* ✅ Frontend Skills (First Page) */}
        <div className="skill-card front">
          <h2>Frontend</h2>
          <div className="skills-list">
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
              />
              <span>HTML</span>
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
              />
              <span>CSS</span>
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
              <span>React.js</span>
            </div>
          </div>
        </div>

        {/* ✅ Backend Skills (Second Page) */}
        <div className="skill-card middle">
          <h2>Backend</h2>
          <div className="skills-list">
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
              />
              <span>Java</span>
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
              />
              <span>MySQL</span>
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
              />
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* ✅ Others (Final Page) */}
        <div className="skill-card back">
          <h2>Others</h2>
          <div className="skills-list">
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                alt="Docker"
              />
              <span>Docker</span>
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
              <span>GitHub</span>
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VS Code"
              />
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
