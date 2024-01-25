import { CarouselCaption } from "react-bootstrap";
import CarouselImage from "./CarouselImage";

type CarouselItemProps = {
  imgSrc: string;
  captionHeading: string;
  captionDescription: string;
};

export default function CustomCarouselItem({
  imgSrc,
  captionHeading,
  captionDescription,
}: CarouselItemProps) {
  return (
    <div className="d-flex justify-content-center">
      <CarouselImage src={imgSrc} />
      <CarouselCaption className="z-1">
        <h3>{captionHeading}</h3>
        <p>{captionDescription}</p>
      </CarouselCaption>
    </div>
  );
}
