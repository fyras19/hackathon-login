import { Button, Card } from "react-bootstrap";
import { Event } from "../../models/Event.model";

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <Card.Img variant="top" src={event.media_url} />
      <Card.Body>
        <Card.Title>{event.nom}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{event.rubrique}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
        <Button variant="primary">Voir l'évènement</Button>
      </Card.Body>
    </Card>
  );
}
