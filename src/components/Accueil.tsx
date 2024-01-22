import { Carousel, Image } from "react-bootstrap";
import "../App.css";

const Accueil = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image
            src="https://metropole.nantes.fr//banque/public/images/culture/-/-2595135646233924377_17-57143-1.jpg"
            style={{ zIndex: "1", height: "400px" }}
          />
          <span
            className="u-img--span--agenda u-hidden@tablet"
            style={{
              backgroundImage:
                "url('https://metropole.nantes.fr//banque/public/images/culture/-/-2595135646233924377_17-57143-1.jpg')",
            }}
          ></span>
          <Carousel.Caption style={{ zIndex: "1" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image
            src="https://metropole.nantes.fr//banque/public/images/culture/-/-8989061063755971860_15-57144-1.jpg"
            style={{ zIndex: "1", height: "400px" }}
          />
          <span
            className="u-img--span--agenda u-hidden@tablet"
            style={{
              backgroundImage:
                "url('https://metropole.nantes.fr//banque/public/images/culture/-/-8989061063755971860_15-57144-1.jpg')",
            }}
          ></span>
          <Carousel.Caption style={{ zIndex: "1" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image
            src="https://metropole.nantes.fr//banque/public/images/culture/i/57182-1-image-pour-la-plaquette-martinpecheur-balanca-erwan.jpg"
            style={{ zIndex: "1", height: "400px" }}
          />
          <span
            className="u-img--span--agenda u-hidden@tablet"
            style={{
              backgroundImage:
                "url('https://metropole.nantes.fr//banque/public/images/culture/i/57182-1-image-pour-la-plaquette-martinpecheur-balanca-erwan.jpg')",
            }}
          ></span>
          <Carousel.Caption style={{ zIndex: "1" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Accueil;
