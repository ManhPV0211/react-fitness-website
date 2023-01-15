import FAQs from "../../components/FAQs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testimonials from "../../components/Testimonials";
import Value from "../../components/Value";

import "./Home.css";

function Home() {
    return (
        <>
        <MainHeader />
        <Programs />
        <Value />
        <FAQs />
        <Testimonials />
        <Footer />
        </>
    )
};

export default Home;