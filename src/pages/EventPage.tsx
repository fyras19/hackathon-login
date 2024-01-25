import { useParams } from "react-router-dom";
import EventItemBreadcrumb from "../components/events/EventItemBreadcrumb";
import { useQuery } from "@tanstack/react-query";
import { getEventById } from "../api/eventsAPI";
import EventDetail from "../components/events/EventDetail";
import LoadingDisplay from "../components/loading/LoadingDisplay";
import ErrorDisplay from "../components/error/ErrorDisplay";

export default function EventPage() {
  const { eventId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["event", [eventId]],
    queryFn: () => getEventById(eventId!),
  });

  return (
    <div className="py-3">
      {isLoading && <LoadingDisplay />}
      {isError && <ErrorDisplay error={error} />}
      {data && (
        <>
          <EventItemBreadcrumb title="Nom Evenement" />
          <EventDetail event={data} />
        </>
      )}
    </div>
  );
}
