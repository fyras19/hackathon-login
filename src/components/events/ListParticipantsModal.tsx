import { Button, ListGroup, Modal } from "react-bootstrap";
import { Event } from "../../models/Event.model";
import { useAppSelector } from "../../redux/hooks";

type ListParticipantsModalProps = {
  show: boolean;
  handleClose: () => void;
  event: Event;
};

export default function ListParticipantsModal({
  show,
  handleClose,
  event,
}: ListParticipantsModalProps) {
  const eventId = `${event.id_manif}_${event.date}_${event.heure_debut}`;
  const eventDetails = useAppSelector((state) =>
    state.events.find((_event) => _event.eventId === eventId)
  );
  const participantsTakingCar = eventDetails?.participants.takeOwnCar;
  const participantsSharingOtherCar = eventDetails?.participants.shareOtherCar;
  const participantsOnTheirOwn = eventDetails?.participants.onTheirOwn;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Participants: {event.nom}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as="ol">
          {participantsTakingCar &&
            participantsTakingCar.map((user, index) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                key={"user_with_car" + index}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{user}</div>
                  Prendra sa propre voiture
                </div>
              </ListGroup.Item>
            ))}
          {participantsSharingOtherCar &&
            participantsSharingOtherCar.map((user, index) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                key={"user_sharing_car" + index}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{user}</div>
                  {eventDetails.cars
                    .map((car) => car.users)
                    .flat()
                    .includes(user) ? (
                    <>Va partager une autre voiture</>
                  ) : (
                    <>Recherche encore une voiture</>
                  )}
                </div>
              </ListGroup.Item>
            ))}
          {participantsOnTheirOwn &&
            participantsOnTheirOwn.map((user, index) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                key={"user_on_his_own" + index}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{user}</div>
                  Va s'arranger par lui-même
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
