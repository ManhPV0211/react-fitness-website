import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";

import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";

import "./Contact.css";

function Contact() {
    return (
        <>
        <Header title="Get In Touch" image={HeaderImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illum iure consequatur voluptatum modi consequuntur!
        </Header>

        <section className="contact">
            <div className="container contact__container">
                <div className="contact__wrapper">
                    <a href="" target="_blank"><MdEmail /></a>
                    <a href="http://facebook.com" target="_blank"><BsMessenger /></a>
                    <a href="http://whatsapp.com" target="_blank"><IoLogoWhatsapp /></a>
                </div>
            </div>
        </section>
        </>
    )
};

export default Contact;