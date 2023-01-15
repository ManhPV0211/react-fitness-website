import { Link } from "react-router-dom";

import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

import LOGO from "../images/logo.png";

function Footer() {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link className="logo" to="/"><img src={LOGO} alt="" /></Link>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, blanditiis eligendi? Officia eius iste odit.</p>

                    <ul className="footer__socials">
                        <li>
                            <a href="http://linkedin.com" target="_blank"><FaLinkedin /></a>
                        </li>
                        <li>
                            <a href="http://facebook.com" target="_blank"><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href="http://twitter.com" target="_blank"><AiOutlineTwitter /></a>
                        </li>
                        <li>
                            <a href="http://instagram.com" target="_blank"><AiOutlineInstagram /></a>
                        </li>
                    </ul>
                </article>

                <article>
                    <h4>Permalinks</h4>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/plans">Plans</Link>
                        </li>
                        <li>
                            <Link to="/trainers">Trainers</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </article>

                <article>
                    <h4>Insights</h4>
                    <ul>
                        <li><Link to="/s">Blog</Link></li>
                        <li><Link to="/s">Case studies</Link></li>
                        <li><Link to="/s">Events</Link></li>
                        <li><Link to="/s">Communities</Link></li>
                        <li><Link to="/s">FAQs</Link></li>
                    </ul>
                </article>

                <article>
                    <h4>Get In Touch</h4>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/s">Support</Link></li>
                    </ul>
                </article>
            </div>

            <div className="footer__copyright">
                <small>2023 ManhPV &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer;