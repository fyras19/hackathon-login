import { Card } from "react-bootstrap";

type ReviewCardProps = {
  title: string;
  text: string;
};

export default function ReviewCard({ title, text }: ReviewCardProps) {
  return (
    <Card>
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title>{title}</Card.Title>
        <Card.Img
          variant="top"
          style={{height: '100px', width: 'auto'}}
          src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png"
        />
        <Card.Text className="p-1">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
