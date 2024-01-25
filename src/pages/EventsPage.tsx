import EventsList from "../components/events/EventsList";
import { useInView } from "react-intersection-observer";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useGetInfiniteEvents } from "../hooks/useGetInfiniteEventsHook";
import LoadingDisplay from "../components/loading/LoadingDisplay";
import ErrorDisplay from "../components/error/ErrorDisplay";

export default function EventsPage() {
  const [ref, inView] = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useGetInfiniteEvents();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);

  return (
    <>
      {isError && <ErrorDisplay error={error} />}
      {isLoading && <LoadingDisplay />}
      {data && (
        <>
          <h1>Evènements</h1>
          <EventsList events={data.pages.map((data) => data.events).flat()} />
          <Button
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            Plus d'évènements
          </Button>
          {isFetchingNextPage && <LoadingDisplay />}
        </>
      )}
    </>
  );
}
