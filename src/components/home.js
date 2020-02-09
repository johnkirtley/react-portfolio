import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';




const Home = () => {
    return (
        <div className="home-container">
            <div>
                <h2 className="home-name">John Kirtley</h2>
                <h3 className="fullstack-dev">Frontend Web Developer</h3>
            </div>
            <Typewriter
                options={{
                    strings: ['React', 'Redux', 'JavaScript', 'SQL', 'HTML/CSS', 'Less', 'Sass', 'Git'],
                    autoStart: true,
                    loop: true,
                    delay: 'natural',
                }}
            />
            <div className="social-icons">
                <a href="https://linkedin.com/in/johnkirtley16" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} className="linkedin" /></a>
                <a href="https://github.com/johnkirtley" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} className="github" /></a>
                <a href="mailto:kirtleyj16@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="email" /></a>
            </div>
        </div>
    )
}

export default Home;