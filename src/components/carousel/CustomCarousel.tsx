import { Carousel } from "react-bootstrap";
import CustomCarouselItem from "./CustomCarouselItem";
import { useGetEventById } from "../../hooks/useGetEventByIdHook";
import { useNavigate } from "react-router-dom";

export default function CustomCarousel() {
  const carouselEventsIds = [
    "59620_2024-01-27_21:00",
    "57559_2024-02-04_15:00",
    "57968_2024-01-27_10:30",
    "60306_2024-01-28_11:30",
  ];

  const navigate = useNavigate();

  const { data: event1 } = useGetEventById(carouselEventsIds[0]);
  const { data: event2 } = useGetEventById(carouselEventsIds[1]);
  const { data: event3 } = useGetEventById(carouselEventsIds[2]);
  const { data: event4 } = useGetEventById(carouselEventsIds[3]);

  const events = [event1, event2, event3, event4];

  return (
    <Carousel>
      {events &&
        events.map(
          (event) =>
            event && (
              <Carousel.Item
                onClick={() =>
                  navigate(
                    `/events/${event.id_manif}_${event.date}_${event.heure_debut}`
                  )
                }
              >
                <CustomCarouselItem
                  imgSrc={event.media_url}
                  captionHeading={event.nom}
                  captionDescription={event.rubrique}
                />
              </Carousel.Item>
            )
        )}
      {/* <Carousel.Item>
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
      </Carousel.Item> */}
    </Carousel>
  );
}
