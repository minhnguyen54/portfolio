import { useState } from "react";
import "/src/Background.css";

const Background = () => {
  const [isFlippedWork, setIsFlippedWork] = useState(false);
  const [isFlippedEdu, setIsFlippedEdu] = useState(false);

  const workExperience = [
    {
      title: "Training Non-Commissioned Officer",
      company: "United States Marine Corps",
      date: "August 2021 – June 2022",
      description:
        "Supervised an 80-Marine platoon, ensuring operational readiness.",
    },
    {
      title: "Automotive Maintenance Technician",
      company: "United States Marine Corps",
      date: "May 2019 – August 2021",
      description: "Performed maintenance and repairs on diesel engines.",
    },
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      school: "Kean University",
      date: "2023 - Present",
      description: "Currently pursuing a degree in Computer Science.",
    },
    {
      title: "High School Diploma",
      school: "Colonia High School",
      date: "2013 - 2027",
      description:
        "Graduated with a strong foundation in mathematics, science, and technology.",
    },
  ];

  return (
    <div id="background" className="background-container">
      <h2>Background</h2>

      <div className="background-wrapper">
        {/* Work Experience Section */}
        <div className="background-section">
          <h3>Work Experience</h3>
          <div
            className={`background-cards ${isFlippedWork ? "flipped" : ""}`}
            onClick={() => setIsFlippedWork(!isFlippedWork)}
          >
            <div className="background-card front">
              <h3>{workExperience[0].title}</h3>
              <p>
                <strong>{workExperience[0].company}</strong>
              </p>
              <p>{workExperience[0].date}</p>
              <p className="background-description">
                {workExperience[0].description}
              </p>
            </div>
            <div className="background-card back">
              <h3>{workExperience[1].title}</h3>
              <p>
                <strong>{workExperience[1].company}</strong>
              </p>
              <p>{workExperience[1].date}</p>
              <p className="background-description">
                {workExperience[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="background-section">
          <h3>Education</h3>
          <div
            className={`background-cards ${isFlippedEdu ? "flipped" : ""}`}
            onClick={() => setIsFlippedEdu(!isFlippedEdu)}
          >
            <div className="background-card front">
              <h3>{education[0].title}</h3>
              <p>
                <strong>{education[0].school}</strong>
              </p>
              <p>{education[0].date}</p>
              <p className="background-description">
                {education[0].description}
              </p>
            </div>
            <div className="background-card back">
              <h3>{education[1].title}</h3>
              <p>
                <strong>{education[1].school}</strong>
              </p>
              <p>{education[1].date}</p>
              <p className="background-description">
                {education[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
