import React from 'react';
import Project from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import "../App.css"


const Portfolio = () => {
    const projects = [
        {
            title: 'Gender Recognition',
            description: 'A Python script that can detect the gender of a speaker from the given input data.',
            technologies: ['Python'],
            image: './images/bg.jpeg'
        },
        {
            title: 'XL Dashboard',
            description: 'A reporting application where instructors can view and understand student progress in given assignments.',
            technologies: ['React.js', 'JavaScript'], // Add any other relevant technologies]
            image: './images/bg1.jpeg'
        },
        {
            title: 'Annual Enrollment',
            description: 'A process where employees of the Client are given a chance to enroll in Health Benefits for a new Plan Year.',
            technologies: ['Selenium WebDriver', 'Java'], // Add any other relevant technologies],
            image: './images/bg3.jpg'
        },
        {
            title: 'FPL Ene-FPLES Support',
            description: 'Providing reliable and cost-effective solutions, combined with personalized service and exceptional customer care.',
            technologies: ['java','Selenium','Content authorized testing'], // Add any other relevant technologies],
            image: './images/bg4.jpg'
        },
        {
            title: 'Text Classification using Machine Learning Techniques',
            description: 'A project that demonstrates the application of machine learning algorithms for text classification tasks.',
            technologies: ['Python', 'Machine Learning Libraries'],
            image: './images/bg5.jpg'
        }
    ];
    console.log(projects)
    return (
        <section className="about-section">
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center ', alignItems: 'center' }}>
                    <h2 style={{ marginBottom: '30px', fontSize: '4em' }} className="section-heading">Projects</h2>
                    <a
   href={"https://firebasestorage.googleapis.com/v0/b/renuka-pasam.appspot.com/o/Resume.pdf?alt=media&token=fe03f62c-0eab-4d9d-85e7-77b5058b8229"}
    target="_blank"
    rel="noopener noreferrer"
    className="resume-button"
    style={{ position: 'absolute', top: '80px', right: '10px', cursor: 'pointer' }}
>
    Resume
</a>

                </div>
                <div className="project-section" style={{ display: 'flex' }}>
                    {projects.map((project) => (
                        <Project key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
