import { Container, Row } from "react-bootstrap";
import FormArret from "./Forms/Form-Arret";
import FormArretProche from "./Forms/Form-Arret-Proche";
import FormHoraire from "./Forms/Form-Horaire";
import FormWaitingTime from "./Forms/Form-Waiting-Time";

type FormulaireProps = {
  selection: number;
};

const Formulaire = ({ selection }: FormulaireProps) => {
  const getFormsGroups = (selection: number) => {
    switch (selection) {
      case 0:
        return <FormArretProche />;
      case 1:
        return <FormArret />;
      case 2:
        return <FormHoraire />;
      case 3:
        return <FormWaitingTime />;
      default:
        return <div>{selection}</div>;
    }
  };

  return (
    <Container>
      <Row>{getFormsGroups(selection)}</Row>
    </Container>
  );
};

export default Formulaire;
