import { useState } from "react";
import FiltersSection, { Filter } from "../components/events/FiltersSection";
import EventsList from "../components/events/EventsList";
import { useGetThemes } from "../hooks/useGetThemesHook";
import { useGetCities } from "../hooks/useGetCitiesHook";
import { useGetOrganizers } from "../hooks/userGetOrganizersHook";
import { useGetHoods } from "../hooks/useGetHoodsHook";
import { useAppSelector } from "../redux/hooks";

export default function MyEventsPage() {
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

  const username = useAppSelector((state) => state.auth.username);
  const data = useAppSelector(
    (state) => state.users.find((user) => user.username === username)?.events
  );

  const initialFilters = filters.map((filter) => {
    return { label: filter.label, options: [] };
  });

  const [selectedFilters, setSelectedFilters] =
    useState<Filter[]>(initialFilters);

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
      {data && (
        <>
          <h1>Mes Evènements</h1>
          <FiltersSection
            filters={filters}
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />
          <EventsList events={data} />
        </>
      )}
    </>
  );
}
