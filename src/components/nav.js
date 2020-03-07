import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle)
    }




    return (
        <>
            <div className="nav-container">
                <h2><Link to='/'>John Kirtley</Link></h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div><FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="mobile-menu-icon" /></div>
            <div className={`menu-${toggle}`}>
                <ul onClick={toggleMenu}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav;