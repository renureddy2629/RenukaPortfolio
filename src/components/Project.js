import React from 'react';

const Project = ({ image, title, description, technologies }) => {
    return (
        <div className="project">
            <img src={image} />
            <div className='project-inside'>

                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    <li>Technologies:</li>
                    {technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;
