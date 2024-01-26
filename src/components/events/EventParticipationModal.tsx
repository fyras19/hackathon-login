import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Event } from "../../models/Event.model";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  participateAndDisallowShare,
  participateAndShareOtherCar,
  participateAndTakeOwnCar,
  participateOnTheirOwn,
} from "../../redux/slices/eventsSlice";
import { addEvent } from "../../redux/slices/usersSlice";

type EventParticipationModalProps = {
  show: boolean;
  handleClose: () => void;
  event: Event;
};

export default function EventParticipationModal({
  show,
  handleClose,
  event,
}: EventParticipationModalProps) {
  const [accept, setAccept] = useState(true);
  const [choice, setChoice] = useState(2);
  const [carPlaces, setCarPlaces] = useState(2);
  const [carOwner, setCarOwner] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const radioLabels = [
    "Je prévois de conduire et d'offrir des places dans ma voiture",
    "Je prévois de participer et je recherche un covoiturage",
    "Je vais m'arranger par moi-même",
  ];
  const eventId = `${event.id_manif}_${event.date}_${event.heure_debut}`;

  const eventData = useAppSelector((state) =>
    state.events.find((_event) => _event.eventId === eventId)
  );

  const availableCars = eventData?.cars.filter(
    (car) => car.remainingPlaces > 0
  );

  const username = useAppSelector((state) => state.auth.username);

  const dispatch = useAppDispatch();

  const isAlreadyParticipant =
    username != undefined &&
    (eventData?.participants.disallowShare.includes(username) ||
      eventData?.participants.onTheirOwn.includes(username) ||
      eventData?.participants.shareOtherCar.includes(username) ||
      eventData?.participants.takeOwnCar.includes(username));

  const usersLookingForCar = eventData?.participants.shareOtherCar.filter(
    (user) =>
      !eventData.cars
        .map((car) => car.users)
        .flat()
        .includes(user)
  );
  console.log(usersLookingForCar);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{event.nom}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Je partage ma participation"
            checked={accept}
            onChange={() => setAccept(!accept)}
          />
        </Form>
        {accept && (
          <>
            <Form>
              <div className="p-3">
                {radioLabels.map((label, index) => (
                  <Form.Check
                    label={label}
                    name={`group1`}
                    type="radio"
                    id={`radio-${index}`}
                    key={`radio-${index}`}
                    checked={index === choice}
                    onChange={() => setChoice(index)}
                  />
                ))}
              </div>
            </Form>
            {choice === 0 && (
              <>
                <FloatingLabel
                  controlId="inputNbPlaces"
                  label="Nombre de places (entre 1 et 4)"
                >
                  <Form.Control
                    type="number"
                    id="inputNbPlaces"
                    pattern="[1-4]"
                    placeholder="Nombre de places (entre 1 et 4)"
                    value={carPlaces}
                    onChange={(e) => setCarPlaces(+e.target.value)}
                  />
                </FloatingLabel>
                <Form.Select
                  multiple
                  onChange={() => {
                    setSelectedValues(
                      usersLookingForCar?.slice(0, carPlaces) ?? []
                    );
                  }}
                >
                  <option disabled>En liste d'attente</option>
                  {usersLookingForCar &&
                    usersLookingForCar.map((user, index) => (
                      <option key={user + index} value={user}>
                        {user}
                      </option>
                    ))}
                </Form.Select>
              </>
            )}
            {choice === 1 && (
              <Form.Select onChange={(e) => setCarOwner(e.target.value)}>
                <option defaultChecked value={undefined}>
                  Sélectionner co-voiturage
                </option>
                {availableCars &&
                  availableCars.map((car, index) => (
                    <option key={`car-${index}`} value={car.owner}>
                      {car.owner} - places disponibles: {car.remainingPlaces}
                    </option>
                  ))}
              </Form.Select>
            )}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button
          variant="primary"
          disabled={isAlreadyParticipant ?? false}
          onClick={() => {
            if (username) {
              if (!accept) {
                dispatch(participateAndDisallowShare({ eventId, username }));
              } else if (choice == 2) {
                dispatch(participateOnTheirOwn({ eventId, username }));
              } else if (choice == 1) {
                dispatch(
                  participateAndShareOtherCar({
                    eventId,
                    username,
                    carOwner: carOwner ?? undefined,
                  })
                );
              } else {
                dispatch(
                  participateAndTakeOwnCar({
                    eventId,
                    username,
                    carPlaces,
                    carUsers: selectedValues,
                  })
                );
              }
              dispatch(addEvent({ event, username }));
            }
            handleClose();
          }}
        >
          Soumettre
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
