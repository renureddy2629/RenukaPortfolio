import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Import your CSS file
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add event listener when component mounts
        window.addEventListener('resize', handleResize);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run the effect only once when the component mounts

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    console.log("inner width ", screenWidth);

    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-left">
                    <h1 className="header-name">Renuka Pasam</h1>
                </div>

                <button className="menu menu-sm" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {(isDropdownOpen || screenWidth > 768) && (
                    <div>
                        <ul className={` header-links-lg `}>
                        <li className="header-link">
    <NavLink activeclassName="active" to="/">
        Home
    </NavLink>
</li>

                            <li className="header-link">
                                <NavLink activeclassName="active" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="header-link">
                                <NavLink activeclassName="active" to="/portfolio">
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="header-link">
                                <NavLink activeclassName="active" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
