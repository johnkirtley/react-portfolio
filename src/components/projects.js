import React from 'react'
import data from './projects.json';


const Projects = () => {
    return (
        <>
            {data.projectData.map(project => (
                <div className="projects-container">
                    <div className="project">
                        <img src={project.image} alt="" />
                        <div className="info">
                            <p>{project.title}</p>
                            <p>{project.position}</p>
                            <p>{project.techUsed}</p>
                            <p>{project.team}</p>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <button><a href={project.github} target="_blank" rel="noopener noreferrer">Code</a></button>
                                <button><a href={project.liveSite} target="_blank" rel="noopener noreferrer">Live Site</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}


export default Projects;