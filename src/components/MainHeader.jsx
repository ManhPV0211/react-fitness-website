import { Link } from "react-router-dom";

import ImageMainHeader from "../images/main_header.png";

function MainHeader() {
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#30DayOfWorkOut</h4>
                    <h1>Join The Lengend Of The Fitness World</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore hic voluptatum fuga error aliquid a soluta eligendi tempora exercitationem ea?</p>
                    <Link to="/plans" className="btn lg">Get Started</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"></div>
                    <div className="main__header-image">
                        <img src={ImageMainHeader} alt="Main Header" />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default MainHeader;