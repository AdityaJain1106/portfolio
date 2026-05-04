"use client";

import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("diva");

  return (
    <>
      <section className="page1-section5" id="about">
        <section className="page1-section5-1">
          <div className="row">
            <div className="about-col-1">
              <img src="/images/dp2.jpeg" alt="Aditya Jain" width="300px" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <br />
              <p className="sub-title-p">
                Full-Stack Developer | Building AI-Powered Automation & Scalable Web Apps |  Java • Spring Boot • React • Node.js • Python | Open Source Contributor | VIT’28
              </p>

              <div className="tab-titles">
                <button
                  className={`tab-links ${activeTab === "diva" ? "active-link" : ""}`}
                  onClick={() => setActiveTab("diva")}
                >
                  Skills
                </button>
                <button
                  className={`tab-links ${activeTab === "divb" ? "active-link" : ""}`}
                  onClick={() => setActiveTab("divb")}
                >
                  Education
                </button>
                <button
                  className={`tab-links ${activeTab === "divc" ? "active-link" : ""}`}
                  onClick={() => setActiveTab("divc")}
                >
                  Experience
                </button>
              </div>
              <div className="blocks">
                <div className={`tab-contents diva ${activeTab === "diva" ? "active-tab" : ""}`}>
                  <ul>
                    <li><span>WEB DEVELOPMENT</span><br />HTML & CSS & JAVASCRIPT , REACT JS | NODE JS ,
                      BOOTSTRAP , TAILWIND CSS , MYSQL , EXPRESS JS and
                      learning more</li>
                    <li><span>AI DEV</span><br />TENSORFLOW / PYTORCH , PANDAS / NUMPY , KAGGLE DATASETS ,
                      OPENAI APIS
                    </li>
                    <li><span>UX/UI</span><br />DESIGNING WEB/APP INTERFACES using FIGMA</li>
                  </ul>
                </div>
                <div className={`tab-contents divb ${activeTab === "divb" ? "active-tab" : ""}`}>
                  <ul>
                    <li><span>10th</span><br />ST. GEORGES COLLEGE, AGRA</li>
                    <li><span>12th</span><br />JIM CORBETT PUBLIC SCHOOL, AGRA</li>
                    <li><span>COLLEGE</span><br />VELLORE INSTITUTE OF TECHNOLOGY AND SCIENCE - BHOPAL
                      (VIT-B)</li>
                  </ul>
                </div>
                <div className={`tab-contents divc ${activeTab === "divc" ? "active-tab" : ""}`}>
                  <ul>
                    <li><span>Open Sourse Experience</span><br />GirlScript Summer of Code
                      (GSSoC)<br />Hacktoberfest
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
