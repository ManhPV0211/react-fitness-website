import { Link, NavLink } from "react-router-dom";

import {FaBars} from "react-icons/fa";

import "./Navbar.css";
import {links} from "../data.js";
import LOGO from "../images/logo.png";

function Navbar() {
    return <nav>
        <div className="container nav__container">
            <Link to="/" className="logo"><img src={LOGO} alt="Nav Logo" /></Link>

            <ul className="nav__links">
                {links.map((link, index) =>
                    <li key={index}>
                        <NavLink to={link.path}>{link.name}</NavLink>
                    </li>
                )}
            </ul>

            <button className="nav__toggle-btn">
                <FaBars />
            </button>
        </div>
    </nav>
};

export default Navbar;