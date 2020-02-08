import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className="nav-container">
            <h2><Link to='/'>John Kirtley</Link></h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
                <li><a href="mailto:kirtleyj16@gmail.com">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;