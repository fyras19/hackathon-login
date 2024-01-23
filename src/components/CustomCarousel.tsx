import { Carousel } from "react-bootstrap";
import CustomCarouselItem from "./CustomCarouselItem";

export default function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <CustomCarouselItem
          imgSrc="https://metropole.nantes.fr//banque/public/images/culture/-/-2595135646233924377_17-57143-1.jpg"
          captionHeading="First slide label"
          captionDescription="Nulla vitae elit libero, a pharetra augue mollis interdum."
        />
      </Carousel.Item>
      <Carousel.Item>
        <CustomCarouselItem
          imgSrc="https://metropole.nantes.fr//banque/public/images/culture/-/-8989061063755971860_15-57144-1.jpg"
          captionHeading="Second slide label"
          captionDescription="Nulla vitae elit libero, a pharetra augue mollis interdum."
        />
      </Carousel.Item>
      <Carousel.Item>
      <CustomCarouselItem
          imgSrc="https://metropole.nantes.fr//banque/public/images/culture/i/57182-1-image-pour-la-plaquette-martinpecheur-balanca-erwan.jpg"
          captionHeading="Third slide label"
          captionDescription="Nulla vitae elit libero, a pharetra augue mollis interdum."
        />
      </Carousel.Item>
    </Carousel>
  );
}
