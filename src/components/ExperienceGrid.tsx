import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { experienceData } from "../data/portfolio";

interface ExperienceGridProps {
  limit?: number;
  showMoreLink?: boolean;
}

export default function ExperienceGrid({ limit, showMoreLink }: ExperienceGridProps) {
  const visibleItems = limit ? experienceData.slice(0, limit) : experienceData;
  const showMore = showMoreLink && experienceData.length > visibleItems.length;

  return (
    <div className="divc1-bigger-block">
      {visibleItems.map((exp, index) => (
        <div key={index} className="contaienr1">
          <div>
            <img src={exp.image} alt={exp.title} width="150px" height="100px" />
          </div>
          <div className="contaienr1-text">
            <h3>{exp.title}</h3>
            <p>
              {exp.role}<br />
              {exp.duration}<br />
              {exp.description}
            </p>
          </div>
        </div>
      ))}
      {showMore && (
        <div className="show-more-item">
          <Link href="/experience" className="show-more-link">
            Show More <FaArrowRight />
          </Link>
        </div>
      )}
    </div>
  );
}
