import React, { useState, useEffect } from 'react';
import "./NavbarStyles.css";
import { Link, useLocation } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Navibar = () => {
    const [clicked, setClicked] = useState(false);
    const [activeItem, setActiveItem] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Set the active item based on the current URL when the component mounts or updates
        const activeMenuItem = MenuItems.find(item => item.url === location.pathname);
        if (activeMenuItem) {
            setActiveItem(activeMenuItem.title);
        }
    }, [location]);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">ParkZen</h1>
            <div className='menu-icons' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            className={activeItem === item.title ? `${item.cName} active` : item.cName}
                            to={item.url}
                            onClick={() => setActiveItem(item.title)}
                        >
                            <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                ))}
                 <li>
                    <Link to="/">
                        <button className="logout-btn">Logout</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navibar;
