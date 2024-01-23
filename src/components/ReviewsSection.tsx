import { Col, Row } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  return (
    <div>
      <h1 className="text-center">Les retours de nos membres sont précieux</h1>
      <Row className="p-3">
        <Col>
          <ReviewCard
            title="Avis1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae accusantium quas itaque dolores! Amet rem fugit praesentium laudantium vero reprehenderit, assumenda nam provident dicta, aliquam harum ea quos eius."
          />
        </Col>
        <Col>
          <ReviewCard
            title="Avis2"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae accusantium quas itaque dolores! Amet rem fugit praesentium laudantium vero reprehenderit, assumenda nam provident dicta, aliquam harum ea quos eius."
          />
        </Col>
        <Col>
          <ReviewCard
            title="Avis3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae accusantium quas itaque dolores! Amet rem fugit praesentium laudantium vero reprehenderit, assumenda nam provident dicta, aliquam harum ea quos eius."
          />
        </Col>
      </Row>
    </div>
  );
}
