import "/src/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-container">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-cards">
        {/* Frontend Skills */}
        <div className="skill-card">
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

        {/* Backend Skills */}
        <div className="skill-card">
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

        {/* Others Section */}
        <div className="skill-card">
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
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"
                alt="Rider"
              />
              <span>Rider</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
