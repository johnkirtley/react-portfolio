import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';



const Skills = () => {
    return (
        <div className="skills-container">
            <div className="top-row">
                <div className="react">
                    <FontAwesomeIcon icon={['fab', 'react']} />
                    <h3>React/Redux</h3>
                </div>
                <div className="javascript">
                    <FontAwesomeIcon icon={['fab', 'js-square']} />
                    <h3>JavaScript</h3>
                </div>
                <div className="less">
                    <FontAwesomeIcon icon={['fab', 'less']} />
                    <h3>less</h3>
                </div>
                <div className="sass">
                    <FontAwesomeIcon icon={['fab', 'sass']} />
                    <h3>Sass</h3>
                </div>
            </div>
            <div>
                <h2>Skills</h2>
            </div>
            <div className="bottom-row">
                <div className="html">
                    <FontAwesomeIcon icon={['fab', 'html5']} />
                    <h3>HTML5/CSS3</h3>
                </div>
                {/* <div className="css">
                    <FontAwesomeIcon icon={['fab', 'css3']} />
                    <h3>CSS3</h3>
                </div> */}
                <div className="git">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <h3>Git</h3>
                </div>
                {/* <div className="sql">
                    <FontAwesomeIcon icon={faDatabase} />
                    <h3>SQL</h3>
                </div> */}
            </div>

        </div>
    )
}

export default Skills;