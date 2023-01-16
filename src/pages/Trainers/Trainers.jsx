import {BsInstagram} from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaFacebook, FaLinkedinIn} from "react-icons/fa";

import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";

import {trainers} from "../../data"
import "./Trainers.css";
import Trainer from "../../components/Trainer";

function Trainers() {
    return (
        <>
        <Header title="Our Trainers" image={HeaderImage}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, assumenda eligendi? Ipsam odit error doloribus.
        </Header>

        <section className="trainers">
            <div className="container trainers__container">
                {trainers.map(trainer => (
                    <Trainer
                        key={trainer.id}
                        image={trainer.image}
                        name={trainer.name}
                        job={trainer.job}
                        socials={[
                            {icon: <BsInstagram />, link: trainer.socials[0]},
                            {icon: <AiOutlineTwitter />, link: trainer.socials[1]},
                            {icon: <FaFacebook />, link: trainer.socials[2]},
                            {icon: <FaLinkedinIn />, link: trainer.socials[3]},
                        ]}
                    />
                ))}
            </div>
        </section>
        </>
    )
};

export default Trainers;