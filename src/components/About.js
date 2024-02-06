import React from 'react';
import Project from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import "../App.css"

const About = () => {
    const projects = [
        {
            title: 'Gender Recognition',
            description: 'A Python script that can detect the gender of a speaker from the given input data.',
            technologies: ['Python']
        },
        {
            title: 'XL Dashboard',
            description: 'A reporting application where instructors can view and understand student progress in given assignments.',
            technologies: ['React.js', 'JavaScript'] // Add any other relevant technologies]
        },
        {
            title: 'Annual Enrollment',
            description: 'A process where employees of the Client are given a chance to enroll in Health Benefits for a new Plan Year.',
            technologies: ['Selenium WebDriver', 'Java'] // Add any other relevant technologies],
        },
        {
            title: 'FPL Ene-FPLES Support',
            description: 'Providing reliable and cost-effective solutions, combined with personalized service and exceptional customer care.',
            technologies: ['C++'] // Add any other relevant technologies],
        },
        {
            title: 'Text Classification using Machine Learning Techniques',
            description: 'A project that demonstrates the application of machine learning algorithms for text classification tasks.',
            technologies: ['Python', 'Machine Learning Libraries']
        },
    ];


    const education = [
        {
            institution: 'Northern Illinois University',
            degree: 'Master’s in Computer Science',
            location: 'DeKalb, IL',
            duration: 'August 2022 - May 2024',
        },
        {
            institution: 'Vignan’s Nirula Institute',
            degree: 'Bachelor of Technology in Information Technology',
            location: 'Guntur, India',
            duration: 'July 2016 - Sep 2020',
        },
    ];

    const experience = [
        {
            company: 'Cognizant Technology Solutions',
            position: 'Quality Analyst',
            location: 'Coimbatore, India',
            duration: 'November 2020 - July 2022',
            highlights: [
                'Experience in automation and functional testing',
                'Knowledge of Selenium WebDriver, Agile methodology, Java, Oops Concepts, and SQL',
                'Analyzed Business requirements, Functional Requirements, designed Test Plan, created Test Requirements, Test Execution and Defect Management',
                'Interacted and coordinated with the Development team and Onsite team',
                'Handled testing for business critical applications and suggesting bugs of critical importance to the business and the corresponding applications',
                'Prepared test plan and test summary report',
            ],
        },
    ];

    return (
        <section className="about-section">
            <h1 className="about-heading">About Me</h1>
            <p className="about-intro">
            I am a skilled web developer and programmer proficient in HTML, JavaScript, React.js, Java, C++, and Python. As a former Quality Analyst at Cognizant, I specialized in automation, Agile methodology, and SQL. Currently pursuing a Master’s in Computer Science, I bring a diverse project portfolio, from gender recognition scripts to reporting applications and impactful solutions.
                Add a short paragraph introducing yourself and your career goals.
            </p>
            <div className="about-sections">
                <div className="about-section-item">
                    <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
                    <h2 className="section-heading">Education</h2>
                    <ul className="section-list">
                        {education.map((educationItem) => (
                            <li key={educationItem.institution}>
                                <h3>{educationItem.degree}</h3>
                                <p>{educationItem.institution}, {educationItem.location}</p>
                                <p>{educationItem.duration}</p>
                            </li>
                        ))}
                    </ul>
                </div>



                <div className="about-section-item">
                    <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
                    <h2 className="section-heading">Experience</h2>
                    <ul className="section-list">
                        {experience.map((experienceItem) => (
                            <li key={experienceItem.company}>
                                <h3>{experienceItem.position}</h3>
                                <p>{experienceItem.company}, {experienceItem.location}</p>
                                <p>{experienceItem.duration}</p>
                                <ul>
                                    {experienceItem.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>



            </div>





            {/* Other about content, hobbies, interests, etc. */}
        </section>
    );
};

export default About;
