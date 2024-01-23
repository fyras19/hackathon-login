import EventsList from "./EventsList";
import { useInView } from "react-intersection-observer";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useGetInfiniteEvents } from "../hooks/useGetInfiniteEventsHook";

export default function EventsPage() {
  const [ref, inView] = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetInfiniteEvents();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);

  return (
    <>
      {data && (
        <>
          <h1>Evènements</h1>
          <EventsList events={data.pages.map((data) => data.events).flat()} />
          <Button
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          />
        </>
      )}
    </>
  );
}
