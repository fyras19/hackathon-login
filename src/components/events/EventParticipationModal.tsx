import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Event } from "../../models/Event.model";
import { useState } from "react";

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
  const radioLabels = [
    "Je prévois de conduire et d'offrir des places dans ma voiture",
    "Je prévois de participer et je recherche un covoiturage",
    "Je vais m'arranger par moi-même",
  ];

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
                  />
                </FloatingLabel>
                <Form.Select multiple>
                  <option disabled>En liste d'attente</option>
                  <option value="1">Alex</option>
                  <option value="2">Chris</option>
                  <option value="3">Fantine</option>
                </Form.Select>
              </>
            )}
            {choice === 1 && (
              <Form.Select>
                <option disabled>Sélectionner co-voiturage</option>
                <option value="1">Alex - places disponibles: 3</option>
                <option value="2">Chris - places disponibles: 1</option>
                <option value="3">Fantine - places disponibles: 2</option>
              </Form.Select>
            )}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Soumettre
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
