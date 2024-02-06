import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Import your CSS file
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    const [screenWidth, setScreenWidth] = useState(769)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    useEffect(() => {
        const handlder = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", handlder)

        return () => {
            window.removeEventListener("resize", handlder)
        }


    }, [window.innerWidth])
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    console.log("inner width ", window.innerWidth)
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-left">
                    <h1 className="header-name">Renuka Pasam</h1>
                </div>


                <button className="menu menu-sm" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {
                    isDropdownOpen || screenWidth > 768 ?
                        <div >

                            <ul
                                className={` header-links-lg `}
                            >
                                <li className="header-link">
                                    <NavLink activeClassName="active" to="/">Home</NavLink>
                                </li>
                                <li className="header-link">
                                    <NavLink activeClassName="active" to="/about">About</NavLink>
                                </li>
                                <li className="header-link">
                                    <NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink>
                                </li>
                                <li className="header-link">
                                    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        : null
                }

            </nav>
        </header>
    );
};

export default Header;
