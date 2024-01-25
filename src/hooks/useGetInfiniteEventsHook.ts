import { useInfiniteQuery } from "@tanstack/react-query";
import { getEvents } from "../api/eventsAPI";
import { Filter } from "../components/events/FiltersSection";

export const useGetInfiniteEvents = (filters: Filter[]) => {
    return useInfiniteQuery({
        queryKey: ["events", ["infinite", filters]],
        queryFn: async ({ pageParam }) => await getEvents(12, pageParam, filters),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
        getPreviousPageParam: (firstPage) => firstPage.previousPage,
    });
}