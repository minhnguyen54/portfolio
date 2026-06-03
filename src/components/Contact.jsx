import { useState } from "react";
import "/src/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setStatus("");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    setError("");
    setStatus("Opening your email client with a prepared message.");
    window.location.href = `mailto:nguyminh@kean.edu?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for any inquiries or collaborations.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {status && <p className="status-message">{status}</p>}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
