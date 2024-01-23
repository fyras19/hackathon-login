import { Col, Row } from "react-bootstrap";
import EventCard from "./EventCard";
import { Event } from "../models/Event.model";

type EventsListProps = {
  events: Event[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <Row>
      {events.map((event) => {
        return (
          <Col sm={4}>
            <EventCard key={event.id_manif} event={event} />
          </Col>
        );
      })}
      {/* <Col sm={4}>
        <EventCard />
      </Col>
      <Col sm={4}>
        <EventCard />
      </Col> */}
    </Row>
  );
}
