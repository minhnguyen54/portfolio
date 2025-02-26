import "/src/About.css";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <img src="profile.png" alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm Minh Nguyen. I'm a student at Kean University, majoring in
            Computer Science - Information System option. Welcome to my
            portfolio!
          </p>
          <div className="button-group">
            <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="resume-button">View Resume</button>
            </a>
            <a href="#contact">
              <button className="contact-button">Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
