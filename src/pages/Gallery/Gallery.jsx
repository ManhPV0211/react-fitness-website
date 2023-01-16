import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";

import "./Gallery.css";

function Gallery() {
    const galleryLength = 15;
    const images = [];

    for(let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }

    return (
        <>
        <Header title="Our Gallery" image={HeaderImage}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, id ipsam ipsa vitae tempore quaerat?
        </Header>

        <section className="gallery">
            <div className="container gallery__container">
                {images.map((img, index) => <img key={index} src={img} alt={`Gallery Of Pic${index+1}`} />)}
            </div>
        </section>
        </>
    )
};

export default Gallery;