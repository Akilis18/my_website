/* (Example) Component for showing a project */

import React from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    image?: string;
    link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div className="project-card">
            {image && <img src={image} alt={title} />}
            <h3>{title}</h3>
            <p>{description}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
    );
};

export default ProjectCard;
