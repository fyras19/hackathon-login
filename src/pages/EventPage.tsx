import { useParams } from "react-router-dom";
import EventItemBreadcrumb from "../components/events/EventItemBreadcrumb";
import EventDetail from "../components/events/EventDetail";
import LoadingDisplay from "../components/loading/LoadingDisplay";
import ErrorDisplay from "../components/error/ErrorDisplay";
import { useGetEventById } from "../hooks/useGetEventByIdHook";

export default function EventPage() {
  const { eventId } = useParams();

  const { data, isLoading, isError, error } = useGetEventById(eventId!);

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
