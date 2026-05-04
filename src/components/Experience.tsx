"use client";

import React, { useState } from "react";
import { technicalSkills, nonTechSkills } from "../data/portfolio";
import ExperienceGrid from "./ExperienceGrid";
import AchievementsGrid from "./AchievementsGrid";

interface ExperienceProps {
  expLimit?: number;
  achLimit?: number;
  showMoreLinks?: boolean;
  defaultTab?: string;
  showTabs?: boolean;
}

export default function Experience({ expLimit, achLimit, showMoreLinks, defaultTab = "divd1", showTabs = true }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <>
      <hr />
      <section className="page1-section3" id="work-experience">
        {showTabs ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <div className="page1-section3-topbtns" style={{ overflow: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <button id="btn_divd1" style={activeTab === "divd1" ? { border: "2px solid #3ddcff", borderRadius: "8px" } : {}} onClick={() => setActiveTab("divd1")}>LearningPath</button>
              <button id="btn_diva1" style={activeTab === "diva1" ? { border: "2px solid #3ddcff", borderRadius: "8px" } : {}} onClick={() => setActiveTab("diva1")}>ProfSkills</button>
              <button id="btn_divb1" style={activeTab === "divb1" ? { border: "2px solid #3ddcff", borderRadius: "8px" } : {}} onClick={() => setActiveTab("divb1")}>Experience</button>
              <button id="btn_divc1" style={activeTab === "divc1" ? { border: "2px solid #3ddcff", borderRadius: "8px" } : {}} onClick={() => setActiveTab("divc1")}>Achievements</button>
            </div>
          </div>
        ) : (
          <div className="page1-section3-header" style={{  marginTop: "20px" }}>
            <h1>{activeTab === "divb1" ? "Experience" : activeTab === "divc1" ? "Achievements" : "Experience"}</h1>
          </div>
        )}

        <div className="blocks1">
          <div className="divd1" id="divd1" style={{ display: activeTab === "divd1" ? "block" : "none" }}>
            <div className="timeline">
              <div className="timeline__component">
                <div className="timeline__date timeline__date--right">Year(2021-2022)</div>
              </div>
              <div className="timeline__middle">
                <div className="timeline__point"></div>
              </div>
              <div className="timeline__component timeline__component--bg">
                <h2 className="timeline__title">Front-End & Java</h2>
                <p className="timeline__paragraph">HTML | CSS | JS & JAVA(OOPS)</p>
              </div>
              <div className="timeline__component timeline__component--bg">
                <h2 className="timeline__title">Front-End Frame Works and Python</h2>
                <p className="timeline__paragraph">TAILWIND CSS | BOOTSTRAP | REACT JS | NODE JS & PYTHON</p>
              </div>
              <div className="timeline__middle">
                <div className="timeline__point"></div>
              </div>
              <div className="timeline__component">
                <div className="timeline__date">Year(2022-2023)</div>
              </div>
              <div className="timeline__component">
                <div className="timeline__date timeline__date--right">Year(2023-2024)</div>
              </div>
              <div className="timeline__middle">
                <div className="timeline__point"></div>
              </div>
              <div className="timeline__component timeline__component--bg">
                <h2 className="timeline__title">Backend</h2>
                <p className="timeline__paragraph">NODE JS | EXPRESS JS | MYSQL</p>
              </div>
              <div className="timeline__component timeline__component--bottom timeline__component--bg">
                <h2 className="timeline__title">C++ and Ongoing Learning in Artificial Intelligence</h2>
                <p className="timeline__paragraph">C++ | TENSORFLOW / PYTORCH , PANDAS / NUMPY , KAGGLE DATASETS , OPENAI APIS</p>
              </div>
              <div className="timeline__middle">
                <div className="timeline__point"></div>
                <div className="timeline__point timeline__point--bottom"></div>
              </div>
              <div className="timeline__component timeline__component--bottom">
                <div className="timeline__date">Year(2024-2025)</div>
              </div>
            </div>
          </div>

          <div className="diva1" id="diva1" style={{ display: activeTab === "diva1" ? "block" : "none" }}>
            <br />
            <section className="page1-section3-container-1">
              <div className="page1-section3-container">
                <h1>Technical Skills</h1>
                <br />
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-box">
                    <span className="title">{skill.name}</span>
                    <div className="skill-bar">
                      <span className="skill-per" style={{ width: `${skill.percent}%` }}>
                        <span className="tooltip">{skill.percent}%</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="page1-section3-container">
                <h1>Non-Tech Skill</h1>
                <br />
                {nonTechSkills.map((skill, index) => (
                  <div key={index} className="skill-box">
                    <span className="title">{skill.name}</span>
                    <div className="skill-bar">
                      <span className="skill-per" style={{ width: `${skill.percent}%` }}>
                        <span className="tooltip">{skill.percent}%</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="divb1" id="divb1" style={{ display: activeTab === "divb1" ? "block" : "none" }}>
            <ExperienceGrid limit={expLimit} showMoreLink={showMoreLinks} />
          </div>

          <div className="divc1" id="divc1" style={{ display: activeTab === "divc1" ? "block" : "none" }}>
            <AchievementsGrid limit={achLimit} showMoreLink={showMoreLinks} />
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
