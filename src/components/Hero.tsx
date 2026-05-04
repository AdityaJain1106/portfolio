"use client";

import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Typewriter = ({ strings }: { strings: string[] }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullString = strings[currentStringIndex];

        if (!isDeleting) {
          setCurrentText(fullString.substring(0, currentText.length + 1));
          if (currentText === fullString) {
            setTimeout(() => setIsDeleting(true), 1500);
            return;
          }
        } else {
          setCurrentText(fullString.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentStringIndex((prev) => (prev + 1) % strings.length);
            return;
          }
        }
      },
      isDeleting ? 30 : 70
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return <span>{currentText}|</span>;
};

const ThreeBackground = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30">

    </div>
  );
};

export default function Hero() {
  return (
    <section className="page1-section1 relative" id="section1g">
      <ThreeBackground />
      <div className="page1-section1-left">
        <div>
          <h1>
            Hi, I am <span className="purple">Aditya Jain</span> and I
          </h1>
        </div>
        <div>
          <h1>
            build <span className="purple">real-world products</span> that solve problems
            <span className="temp-text-fordesk"> and scale with modern technology.</span>
          </h1>
        </div>


        <div className="page1-section1-cust">
          <span className="purple">
            <Typewriter
              strings={[
                'Full-Stack MERN Developer',
                'AI & Automation Builder',
                'Open Source Contributor',
                'Crafting Clean UI/UX'
              ]}
            />
          </span>
        </div>
        <br />
        <br />
        <div>
          <h2 className="page1-section1-h2">FIND ME ON</h2>
          <br />
          <div className="page1-section1-secbutton">
            <a className="page1-section1-button GFG" target="_blank" href="https://www.linkedin.com/in/aditya-jain-9a5a17248/" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a className="page1-section1-button GFG" target="_blank" href="https://github.com/AdddiJain" rel="noreferrer">
              <FaGithub />
            </a>
            <a className="page1-section1-button GFG" target="_blank" href="https://www.instagram.com/its.adityajain/" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
          <br />
          <h2 className="page1-section1-h2">BEST SKILLS</h2>
          <br />
          <div className="page1-section1-button-section">
            <div className="page1-section1-secbutton">
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" style={{ width: "24px", height: "24px" }} />
              </button>
            </div>
            <div className="page1-section1-secbutton">
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg" alt="Tailwind CSS" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style={{ width: "24px", height: "24px" }} />
              </button>
            </div>
            <div className="page1-section1-secbutton">
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{ width: "24px", height: "24px" }} />
              </button>
              <button className="page1-section1-button GFG">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" style={{ width: "24px", height: "24px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
