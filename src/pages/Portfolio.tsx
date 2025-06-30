import React from "react";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  return (
    <main className="portfolio">
      <section className="portfolio-content">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-subtitle">Here are some of the projects I've worked on.</p>
        {/* Later map <ProjectCard /> components here */}
      </section>
    </main>
  );
};

export default Portfolio;
