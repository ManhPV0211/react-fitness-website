import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./About.css";

function About() {
    return (
        <>
        <Header
            title="About Us"
            image={HeaderImage}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor ipsum excepturi corporis laborum quibusdam necessitatibus quam nisi laboriosam minima.
        </Header>

        <section className="about__story">
            <div className="container about__story-container">
                <div className="about__img">
                    <img src={StoryImage} alt="" />
                </div>
                <div className="about__content">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error autem at eligendi! Dolor quod animi at quas sit repellendus repellat ex, cumque minus optio, fugiat ipsa blanditiis magnam rem dicta.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ab assumenda debitis veniam atque accusantium, incidunt odit illo fugit eos!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, magni?</p>
                </div>
            </div>
        </section>

        <section className="about__vision">
            <div className="container about__vision-container">
                <div className="about__content">
                    <h1>Our Vison</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error autem at eligendi! Dolor quod animi at quas sit repellendus repellat ex, cumque minus optio, fugiat ipsa blanditiis magnam rem dicta.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, magni?</p>
                </div>
                <div className="about__img">
                    <img src={VisionImage} alt="" />
                </div>
            </div>
        </section>

        <section className="mission__story">
            <div className="container mission__story-container">
                <div className="about__img">
                    <img src={MissionImage} alt="" />
                </div>
                <div className="about__content">
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error autem at eligendi! Dolor quod animi at quas sit repellendus repellat ex, cumque minus optio, fugiat ipsa blanditiis magnam rem dicta.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ab assumenda debitis veniam atque accusantium, incidunt odit illo fugit eos!</p>
                </div>
            </div>
        </section>
        </>
    )
};

export default About;