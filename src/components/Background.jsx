import { useState } from "react";
import "/src/Background.css";

const Background = () => {
  const slides = [
    {
      title: "Work Experience",
      items: [
        {
          title: "Training Non-Commissioned Officer",
          company: "United States Marine Corps",
          date: "August 2021 – June 2022",
          location: "Camp Lejeune, NC",
          description:
            "Supervised an 80-Marine platoon, ensuring operational readiness, maintaining personnel records, and overseeing training requirements such as rifle and swim qualifications. Utilized digital tools for documentation and record-keeping.",
        },
        {
          title: "Automotive Maintenance Technician",
          company: "United States Marine Corps",
          date: "May 2019 – August 2021",
          location: "Camp Lejeune, NC",
          description:
            "Performed maintenance and repairs on diesel engines, transmissions, and differentials. Diagnosed mechanical failures, conducted preventive maintenance, and trained junior mechanics to improve efficiency and safety.",
        },
      ],
    },
    {
      title: "Education",
      items: [
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
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const nextSlide = () => {
    setAnimationClass("slide-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setAnimationClass("slide-in-right");
    }, 300);
  };

  const prevSlide = () => {
    setAnimationClass("slide-out-right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setAnimationClass("slide-in-left");
    }, 300);
  };

  return (
    <div id="background" className="background-container">
      <h2>Background</h2>
      <div className="background-carousel">
        <button className="carousel-btn left" onClick={prevSlide}>
          ◀
        </button>

        <div className={`background-slide ${animationClass}`}>
          <h3>{slides[currentIndex].title}</h3>
          <div className="background-cards">
            {slides[currentIndex].items.map((item, index) => (
              <div key={index} className="background-card">
                <h3>{item.title}</h3>
                <p>
                  <strong>{item.company || item.school}</strong>
                </p>
                <p>{item.date}</p>
                <p className="background-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Background;
