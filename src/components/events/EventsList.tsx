import { Col, Row } from "react-bootstrap";
import EventCard from "./EventCard";
import { Event } from "../../models/Event.model";

type EventsListProps = {
  events: Event[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <Row>
      {events.map((event) => {
        return (
          <Col sm={4} className="py-1" key={event.id_manif}>
            <EventCard event={event} />
          </Col>
        );
      })}
    </Row>
  );
}
