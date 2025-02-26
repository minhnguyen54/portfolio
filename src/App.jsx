import { useState } from "react";
import "./App.css";
import "./global.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Background />
      <Projects />
      <Contact />
      <ChatBot />
    </>
  );
}

export default App;
