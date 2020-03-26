import React from 'react';
import ReactGA from 'react-ga';

const tracking = () => {
	ReactGA.initialize('UA-162040815-1', { standardImplementation: true });
	ReactGA.pageview(window.location.pathname + window.location.search);
};

const Resume = () => {
	tracking();
	return (
		<div className='resume-container'>
			<div className='resume'>
				<iframe
					src='https://resume.creddle.io/embed/btb2cnnxwfe'
					width='850'
					height='1100'
					title='resume'
					seamless></iframe>
			</div>
		</div>
	);
};

export default Resume;
