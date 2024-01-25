import { Button, Figure } from "react-bootstrap";
import { Event } from "../../models/Event.model";

type EventDetailProps = {
  event: Event;
};

export default function EventDetail({ event }: EventDetailProps) {
  return (
    <div className="d-flex flex-column align-items-center px-5">
      <h1>{event.nom}</h1>
      <Figure.Image src={event.media_url} />
      <Button className="mb-1">Voir participants</Button>
      <Button>Je participe</Button>
      <p>
        <b>Description: </b>
        {event.description}
      </p>
      {event.type && (
        <p>
          <b>Types: </b>
          {event.type.replace(",,,,", "").replace(",,,", "").replace(",,", "")}
        </p>
      )}
      {event.lieu && (
        <p>
          <b>Lieu: </b>
          {event.lieu} - {event.adresse && <>{event.adresse}</>} -{" "}
          {event.code_postal && <>{event.code_postal}</>}{" "}
          {event.ville && <>{event.ville}</>}
        </p>
      )}
      {event.precisions_tarifs && (
        <p>
          <b>Tarif: </b>
          {event.precisions_tarifs}
        </p>
      )}
      {!event.precisions_tarifs && event.gratuit && (
        <p>
          <b>Tarif: </b>
          gratuit
        </p>
      )}
      {event.date && (
        <p>
          <b>Date: </b>
          {event.date}
        </p>
      )}
      {event.heure_debut && (
        <p>
          <b>Heure Début: </b>
          {event.heure_debut}
        </p>
      )}
      {event.heure_fin && (
        <p>
          <b>Heure Fin: </b>
          {event.heure_fin}
        </p>
      )}
      {event.lieu_email && (
        <p>
          <b>Email: </b>
          {event.lieu_email}
        </p>
      )}
      {event.lieu_tel && (
        <p>
          <b>Téléphone: </b>
          {event.lieu_tel}
        </p>
      )}
      {event.url_site && (
        <Button variant="info">
          <a href={event.url_site} target="_blank">
            Voir sur site
          </a>
        </Button>
      )}
    </div>
  );
}
