import { Button } from "react-bootstrap";

export default function Jumbotron() {
  return (
    <div className="p-5 text-center bg-body-tertiary rounded-3">
      <h1 className="text-body-emphasis">Vous habitez à Nantes ?</h1>
      <h1 className="text-body-emphasis">Trouvez vos prochaines expériences</h1>
      <p className="lead col-lg-8 mx-auto">
        Des évènements culturelles, sportives, etc...
      </p>
      <Button variant="outline-primary" size="lg">En savoir plus</Button>
    </div>
  );
}