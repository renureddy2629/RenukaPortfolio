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
            image: './images/bg.jpeg'
        },
        {
            title: 'Annual Enrollment',
            description: 'A process where employees of the Client are given a chance to enroll in Health Benefits for a new Plan Year.',
            technologies: ['Selenium WebDriver', 'Java'], // Add any other relevant technologies],
            image: './images/bg.jpeg'
        },
        {
            title: 'FPL Ene-FPLES Support',
            description: 'Providing reliable and cost-effective solutions, combined with personalized service and exceptional customer care.',
            technologies: ['C++'], // Add any other relevant technologies],
            image: './images/bg.jpeg'
        },
        {
            title: 'Text Classification using Machine Learning Techniques',
            description: 'A project that demonstrates the application of machine learning algorithms for text classification tasks.',
            technologies: ['Python', 'Machine Learning Libraries'],
            image: './images/bg.jpeg'
        }
    ];
    console.log(projects)
    return (
        <section className="about-section">
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}  >
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center ', alignItems: 'center' }}>

                    <FontAwesomeIcon icon={faCode} className="section-icon" />
                    <h2 style={{ marginBottom: 30 }} className="section-heading">Projects</h2>
                </div>
                <div className="project-section" style={{ display: 'flex' }}>
                    {projects.map((project) => (
                        <Project key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;