import React from 'react';
import { Link } from 'react-router-dom';
import { useChangeMode } from '../hooks/useChangeMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

const Home = () => {
	const [changeMode, setChangeMode] = useChangeMode('color', false);

	const toggleMode = e => {
		e.preventDefault();
		setChangeMode(!changeMode);
	};
	return (
		<div className='home-container'>
			<div>
				<h2 className='home-name'>John Kirtley</h2>
				<h3 className='fullstack-dev'>Frontend Web Developer</h3>
			</div>
			<Typewriter
				options={{
					strings: [
						'React',
						'Redux',
						'JavaScript',
						'SQL',
						'HTML/CSS',
						'Less',
						'Sass',
						'Git'
					],
					autoStart: true,
					loop: true,
					delay: 'natural'
				}}
			/>
			<div className='social-icons'>
				<a
					href='https://linkedin.com/in/johnkirtley16'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon icon={['fab', 'linkedin']} className='linkedin' />
				</a>
				<a
					href='https://github.com/johnkirtley'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon icon={['fab', 'github']} className='github' />
				</a>
				<Link to='/contact'>
					<FontAwesomeIcon icon={faEnvelope} className='email' />
				</Link>
			</div>
			<div className='change-mode__toggle'>
				<div
					onClick={toggleMode}
					className={changeMode ? 'toggle toggled' : 'toggle'}
				/>
			</div>
			<p style={{ color: 'white', fontSize: '2rem', paddingTop: '0.5%' }}>
				Change Theme
			</p>
		</div>
	);
};

export default Home;
