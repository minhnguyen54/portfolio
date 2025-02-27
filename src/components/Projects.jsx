import { useState, useEffect } from "react";
import "/src/Projects.css";

const projects = [
  {
    id: 1,
    title: "Spider-Man Game: Avoid the Rocks",
    category: "Web Apps",
    description:
      "Dodge falling rocks as Spider-Man! A simple reflex-based game.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/public/images/spiderman-game.png",
    link: "https://obi2.kean.edu/~nguyminh@kean.edu/CPS3500/U6AS3/game4/game4.html", // ADD YOUR GAME LINK HERE
  },
  {
    id: 2,
    title: "Mythology Matching Game",
    category: "Web Apps",
    description:
      "Match Greek gods and mythological symbols in this fun puzzle game.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/public/images/mythology-game.png",
    link: "https://obi2.kean.edu/~nguyminh@kean.edu/CPS3500/U6AS3/game3/game3.html", // ADD YOUR GAME LINK HERE
  },
  {
    id: 3,
    title: "Alien Battle: Death Ray, Black Hole, Energy Forcefield",
    category: "Web Apps",
    description:
      "A futuristic alien battle game based on Rock-Paper-Scissors! Choose your weapon and defeat your opponent.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/public/images/alien-game.png",
    link: "https://obi2.kean.edu/~nguyminh@kean.edu/CPS3500/U6AS3/game2/game2.html", // ADD YOUR GAME LINK HERE
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
        I have worked on a wide range of projects. From web apps to interactive
        games. Here are some of my projects.
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="game-btn"
              >
                Try Game
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
