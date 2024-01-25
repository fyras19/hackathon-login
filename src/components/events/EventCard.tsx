import { Button, Card } from "react-bootstrap";
import { Event } from "../../models/Event.model";
import { useNavigate } from "react-router-dom";

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  const eventId = `${event.id_manif}_${event.date}_${event.heure_debut}`;
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Img variant="top" src={event.media_url} style={{height: '250px'}} />
      <Card.Body>
        <Card.Title className="text-truncate">{event.nom}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {event.rubrique}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
        <Button variant="primary" onClick={() => navigate(eventId)}>Voir l'évènement</Button>
      </Card.Body>
    </Card>
  );
}
