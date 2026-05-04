import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { achievements } from "../data/portfolio";

interface AchievementsGridProps {
  limit?: number;
  showMoreLink?: boolean;
}

export default function AchievementsGrid({ limit, showMoreLink }: AchievementsGridProps) {
  const visibleItems = limit ? achievements.slice(0, limit) : achievements;
  const showMore = showMoreLink && achievements.length > visibleItems.length;

  return (
    <section className="jsft">
      <div className="divc1-bigger-block">
        {visibleItems.map((ach, index) => (
          <div key={index} className="contaienr1">
            <div>
              <img src={ach.image} alt={ach.title} width="150px" height="100px" />
            </div>
            <div className="contaienr1-text">
              <h3>{ach.title}</h3>
              <p>{ach.description}</p>
            </div>
          </div>
        ))}
        {showMore && (
          <div className="show-more-item">
            <Link href="/achievements" className="show-more-link">
              Show More <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
