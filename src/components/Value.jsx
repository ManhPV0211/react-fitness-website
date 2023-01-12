import {GiCutDiamond} from "react-icons/gi";

import IMAGE_VALUE from "../images/values.jpg";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";

import { values } from "../data";


function Value() {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={IMAGE_VALUE} alt="Values" />
                    </div>
                </div>

                <div className="values__right">
                    <SectionHead title="Values" icon={<GiCutDiamond />}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus velit quas odit dolorem numquam alias aliquam, tenetur suscipit fugiat.</p>

                    <div className="values__wrapper">
                    {values.map(value => (
                        <Card className="values__value" key={value.id}>
                            <span>{value.icon}</span>
                            <h4>{value.title}</h4>
                            <small>{value.desc}</small>
                        </Card>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Value;