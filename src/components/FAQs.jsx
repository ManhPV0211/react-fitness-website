import { FaQuestion } from "react-icons/fa";

import SectionHead from "./SectionHead";
import { faqs } from "../data";
import FAQ from "./FAQ";

function FAQs() {
    return (
        <section className="faqs">
            <div className="container faqs__container">
                <SectionHead icon={<FaQuestion />} title="FAQs"/>
                <div className="faqs__wrapper">
                    {faqs.map(faq => <FAQ key={faq.id} question={faq.question} answer={faq.answer}/>)}
                </div>
            </div>
        </section>
    )
}

export default FAQs;