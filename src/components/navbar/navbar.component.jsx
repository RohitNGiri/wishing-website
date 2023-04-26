import React from "react";
import { FiMenu } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

import './navbar.styles.css';


const Navbar = () => {
    return (
        <div className="container">
            <button className="menu" title="Menu">
                <FiMenu size={28}/>
            </button>
            <h2 className="title" title="Wishing Website">
                Wishing Website
            </h2>
            <div className="search" title="Search for Your Festival">
                <FaSearch size={22}/>
            </div>
        
        </div>
        
    )
}

export default Navbar;