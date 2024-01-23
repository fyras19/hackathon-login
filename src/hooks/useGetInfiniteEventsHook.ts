import { useInfiniteQuery } from "@tanstack/react-query";
import { getEvents } from "../utils";

export const useGetInfiniteEvents = () => {
    return useInfiniteQuery({
        queryKey: ["events", "infinite"],
        queryFn: async ({ pageParam }) => await getEvents(12, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
        getPreviousPageParam: (firstPage) => firstPage.previousPage,
    });
}