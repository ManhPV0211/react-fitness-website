import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import {FaBars} from "react-icons/fa";
import {FaRegWindowClose} from "react-icons/fa";

import "./Navbar.css";
import {links} from "../data.js";
import LOGO from "../images/logo.png";

function Navbar() {
    const [isNavShowing, setIsNavShowing] = useState(false);
    return <nav>
        <div className="container nav__container">
            <Link to="/" className="logo"><img src={LOGO} alt="Nav Logo" /></Link>

            <ul 
                className={`nav__links ${isNavShowing ? "show__nav" : "hiden__nav"}`}
            >
                {links.map((link, index) =>
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            className={({isActive}) => isActive? "active-nav" : ""}
                            onClick={() => setIsNavShowing(false)}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                )}
            </ul>

            <button
                className="nav__toggle-btn"
                onClick={() => setIsNavShowing(!isNavShowing)}
            >
                {!isNavShowing ? <FaBars /> : <FaRegWindowClose />}
            </button>
        </div>
    </nav>
};

export default Navbar;