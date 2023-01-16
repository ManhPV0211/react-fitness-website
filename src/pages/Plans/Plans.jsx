import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";

import {plans} from "../../data";
import "./Plans.css";

function Plans() {
    return (
        <>
        <Header title="Membership Plans" image={HeaderImage}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis, ex at atque consequatur excepturi.
        </Header>

        <section className="plans">
            <container className="container plans__container">
                {plans.map(plan => (
                    <Card key={plan.id} className="plan">
                        <h3>{plan.name}</h3>
                        <small>{plan.desc}</small>
                        <h1>{`$${plan.price}`}</h1><h2>/mo</h2>

                        <h4>Features</h4>
                        {plan.features.map(feature => (
                            <p 
                                className={!feature.available ? "disable" : ""}
                            >
                                {feature.feature}
                            </p>
                        ))}

                        <button className="btn lg">Choose plan</button>
                    </Card>
                ))}
            </container>
        </section>
        </>
    )
};

export default Plans;