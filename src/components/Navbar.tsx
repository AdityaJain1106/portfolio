"use client";

import React from "react";
import Link from "next/link";
import { FaBars, FaDownload } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      {/* LEFT: LOGO */}
      <div className="logo">
        <Link href="/" className="logo-text">
          <span className="logo-icon">&gt;_</span>
          <span className="logo-name">Aditya Jain</span>
        </Link>
      </div>

      {/* HAMBURGER */}
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <FaBars />
      </label>

      {/* RIGHT: NAV + RESUME */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#latest-projects">Projects</Link></li>
          <li><Link href="/#work-experience">WorkExperience</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li className="mobile-resume-tab">
            <a href="images/cv.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>

        <a
          className="navbar-resume-btn"
          href="images/cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
          <FaDownload />
        </a>
      </div>
    </nav>
  );
}