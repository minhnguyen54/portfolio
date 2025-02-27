import { useEffect, useState } from "react";
import "/src/About.css";

function About() {
  const fullText = "Minh Nguyen";
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const pauseBetween = 1500; // Pause before erasing
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseBetween);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h1>
            Hi, I'm <span className="typing-name">{text}</span>
            <span className="cursor"></span>
          </h1>
          <p>
            I'm a student at Kean University, majoring in Computer Science -
            Information System option. Welcome to my portfolio!
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
