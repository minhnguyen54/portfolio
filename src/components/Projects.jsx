import { useState, useEffect } from "react";
import "/src/Projects.css";

const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "Web Apps",
    date: "Coming Soon",
    description: "This is a placeholder for a future web project.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Project 2",
    category: "Android Apps",
    date: "Coming Soon",
    description: "This is a placeholder for a future Android project.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    id: 3,
    title: "Project 3",
    category: "Machine Learning",
    date: "Coming Soon",
    description: "This is a placeholder for a future AI/ML project.",
    tags: ["Python", "TensorFlow", "PyTorch"],
  },
];

const categories = ["All", "Web Apps", "Android Apps", "Machine Learning"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false); // Reset animation before category change
    setTimeout(() => setAnimate(true), 50); // Small delay to trigger animation
  }, [activeCategory]);

  // Filter projects based on active category
  useEffect(() => {
    setFilteredProjects(
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <p>
        I have worked on a wide range of projects. From web apps to android
        apps. Here are some of my projects.
      </p>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

        {/* GitHub Button */}
        <a
          href="https://github.com/minhnguyen54"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="github-btn">GitHub</button>
        </a>
      </div>

      {/* Projects Grid */}
      <div className={`projects-grid ${animate ? "fade-in" : ""}`}>
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image"> {/* Placeholder for image */} </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p>{project.description}</p>
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
