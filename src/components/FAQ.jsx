import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FAQ({question, answer}) {
    const [isShowAnswer, setIsShowAnswer] = useState(false);
    return (
        <article className="faq" onClick={() => {setIsShowAnswer(!isShowAnswer)}}>
            <div>
                <h4>{question}</h4>
                <button className="faq__icon">
                    {!isShowAnswer ? <AiOutlinePlus /> : <AiOutlineMinus />}
                </button>
            </div>
            {isShowAnswer && <p>{answer}</p>}
        </article>
    )
}

export default FAQ;