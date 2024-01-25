import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="p-5 text-center bg-body-tertiary rounded-3" fluid>
      <Row>
        <Col>
          <h4>Hackathon Login</h4>
        </Col>
        <Col>
          <h5>A propos de nous</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            odio iste tempora impedit culpa in omnis praesentium incidunt unde
            natus hic doloremque asperiores, et voluptas corporis est laborum
            facere odit.
          </p>
        </Col>
        <Col>
          <h5>Quoi faire à Nantes</h5>
          <ul className="list-unstyled">
            <li>Catégorie 1</li>
            <li>Catégorie 2</li>
            <li>Catégorie 3</li>
            <li>Catégorie 4</li>
          </ul>
        </Col>
        <Col>
          <h5>Contact</h5>
          <h5>Feedback</h5>
          <h5>Conditions générales</h5>
          <h5>Politique de confidentialité</h5>
        </Col>
      </Row>
    </Container>
  );
}
