import React from "react";
import "/src/Education.css"; // Import CSS file

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      school: "Kean University",
      date: "2023 - Present",
      description:
        "Currently pursuing a degree in Computer Science, focusing on software development, algorithms, and data structures.",
    },
    {
      title: "High School Diploma",
      school: "Colonia High School",
      date: "2013 - 2027",
      description:
        "Graduated with a strong foundation in mathematics, science, and technology, preparing for a career in software engineering.",
    },
  ];

  return (
    <div id="education" className="education-container">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            {/* Timeline Dots & Line */}
            <div className="timeline">
              <div className="timeline-dot"></div>
              {index !== educationData.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>

            {/* Education Card */}
            <div className="education-card">
              <h3>{edu.title}</h3>
              <p className="school">{edu.school}</p>
              <p className="date">{edu.date}</p>
              <p className="description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
