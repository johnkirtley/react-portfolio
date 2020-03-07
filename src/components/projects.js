import React from 'react';
import data from './projects.json';

const Projects = () => {
	return (
		<>
			{data.projectData.map(project => (
				<div className='projects-container'>
					<div className='project'>
						<img src={project.image} alt={project.name} />
						<div className='info'>
							<p>
								<span className='project-label'>Name:</span> {project.title}
							</p>
							<p>
								<span className='project-label'>Role:</span> {project.position}
							</p>
							<p>
								<span className='project-label'>Built With:</span>{' '}
								{project.techUsed}
							</p>
							<p>
								<span className='project-label'>Team:</span> {project.team}
							</p>
							<p>
								<span className='project-label'>Contribution:</span>{' '}
								{project.description}
							</p>
							<div className='project-links'>
								<button>
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'>
										Code
									</a>
								</button>
								<button>
									<a
										href={project.liveSite}
										target='_blank'
										rel='noopener noreferrer'>
										Live Site
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Projects;
