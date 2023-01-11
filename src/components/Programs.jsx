import { Link } from "react-router-dom";

// INIT DATA
import { programs } from "../data";

// REACT ICONS
import {FaCrown} from "react-icons/fa";
import {SiOpenaigym} from "react-icons/si";
import {AiFillCaretRight} from "react-icons/ai";

// COMPONENTS
import SectionHead from "./SectionHead";
import Card from "../UI/Card"

function Programs() {
    return (
        <section className="programs">
            <div className="container programs__container">
                <SectionHead icon={<FaCrown />} title="Programs" className="programs__head"/>
            </div>

            <div className="programs__wrapper">
                {programs.map(program => (
                    <Card key={program.id} className="program">
                        <span>{program.icon}</span>
                        <h4>{program.title}</h4>
                        <small>{program.info}</small>
                        <Link to={program.path} className="btn sm">Learn More <AiFillCaretRight /></Link>
                    </Card>
                ))}
            </div>
        </section>
    )
};

export default Programs;