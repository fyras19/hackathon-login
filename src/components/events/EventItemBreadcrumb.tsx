import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type EventItemBreadcrumbProps = {
  title: string;
};

export default function EventItemBreadcrumb({
  title,
}: EventItemBreadcrumbProps) {
  const navigate = useNavigate();
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => navigate("/")}>Accueil</Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => navigate("/events")}>
        Evènements
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
