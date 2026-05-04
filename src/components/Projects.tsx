"use client";

import React from "react";
import Link from "next/link";
import { FaGlobe, FaGithub, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/portfolio";
import { motion } from "framer-motion";

interface ProjectsProps {
  limit?: number;
  showButton?: boolean;
}

export default function Projects({ limit, showButton }: ProjectsProps) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;
  const showMore = showButton && projects.length > visibleProjects.length;

  return (
    <>
      <hr />
      <section className="page1-section2" id="latest-projects">
        <h1>Latest Projects</h1>
        <section className="page1-section2-boxes1">
          {visibleProjects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="page1-section2-box"
            >
              <div className="page1-section2-box-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="page1-section2-box-text">
                <h2>{project.title} <span></span></h2>
                <h3>{project.description}</h3>
                <div className="page1-section2-box-text-icons">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <FaGlobe size={24} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
        {showMore && (
          <div className="show-more-wrapper">
            <Link href="/projects" className="show-more-link">
              Show More <FaArrowRight />
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
