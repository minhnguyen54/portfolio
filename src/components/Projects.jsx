import { useState, useEffect } from "react";
import "/src/Projects.css";

const projects = [
  {
    id: 1,
    title: "Spider-Man Game: Avoid the Rocks",
    category: "Interactive Web App",
    description:
      "A browser-based reflex game focused on collision handling, score feedback, and responsive keyboard controls.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "spiderman-game.png",
    link: "https://obi2.kean.edu/~nguyminh@kean.edu/CPS3500/U6AS3/game4/game4.html",
  },
  {
    id: 2,
    title: "Mythology Matching Game",
    category: "Interactive Web App",
    description:
      "A matching game that uses DOM state, visual feedback, and game-flow logic to reinforce memory and pattern recognition.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "mythology-game.png",
    link: "https://obi2.kean.edu/~nguyminh@kean.edu/CPS3500/U6AS3/game3/game3.html",
  },
  {
    id: 3,
    title: "Alien Battle Strategy Game",
    category: "Interactive Web App",
    description:
      "A themed strategy game built around conditional logic, player choices, result states, and a polished browser UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "alien-game.png",
    link: "https://obi2.kean.edu/~nguyminh@kean.edu/CPS3500/U6AS3/game2/game2.html",
  },
];

const Projects = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  }, []);

  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <p>
        Selected browser projects that demonstrate JavaScript fundamentals,
        user interaction, responsive layouts, and deployable front-end work.
      </p>

      <div className="github-container">
        <a
          href="https://github.com/minhnguyen54"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="github-btn">Go To My GitHub</button>
        </a>
      </div>

      <div className={`projects-grid ${animate ? "fade-in" : ""}`}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-thumbnail"
            />
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="game-btn"
              >
                View Project
              </a>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
                                                  
