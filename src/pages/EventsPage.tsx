import EventsList from "../components/events/EventsList";
import { useInView } from "react-intersection-observer";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useGetInfiniteEvents } from "../hooks/useGetInfiniteEventsHook";
import LoadingDisplay from "../components/loading/LoadingDisplay";
import ErrorDisplay from "../components/error/ErrorDisplay";
import FiltersSection, { Filter } from "../components/events/FiltersSection";
import { useGetThemes } from "../hooks/useGetThemesHook";
import { useGetCities } from "../hooks/useGetCitiesHook";
import { useGetHoods } from "../hooks/useGetHoodsHook";
import { useGetOrganizers } from "../hooks/userGetOrganizersHook";

export default function EventsPage() {
  const [ref, inView] = useInView();

  const { data: themes } = useGetThemes();
  const { data: cities } = useGetCities();
  const { data: organizers } = useGetOrganizers();
  const { data: hoods } = useGetHoods();

  const filters = [
    { label: "rubrique", options: themes ?? [] },
    { label: "emetteur", options: organizers ?? [] },
    { label: "ville", options: cities ?? [] },
    { label: "lieu_quartier", options: hoods ?? [] },
  ];

  const initialFilters = filters.map((filter) => {
    return { label: filter.label, options: [] };
  });

  console.log(initialFilters);

  const [selectedFilters, setSelectedFilters] =
    useState<Filter[]>(initialFilters);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useGetInfiniteEvents(selectedFilters);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);

  const handleFilterChange = (index: number, selectedOption: string) => {
    const updatedFilters = [...selectedFilters];
    if (updatedFilters[index].options.includes(selectedOption))
      updatedFilters[index].options = updatedFilters[index].options.filter(
        (option) => option !== selectedOption
      );
    else updatedFilters[index].options.push(selectedOption);
    setSelectedFilters(updatedFilters);
  };

  return (
    <>
      {isError && <ErrorDisplay error={error} />}
      {isLoading && <LoadingDisplay />}
      {data && (
        <>
          <h1>Evènements</h1>
          <FiltersSection
            filters={filters}
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />
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
