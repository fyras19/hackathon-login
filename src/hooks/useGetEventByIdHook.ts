import { useQuery } from "@tanstack/react-query";
import { getEventById } from "../api/eventsAPI";

export const useGetEventById = (eventId: string) => useQuery({
    queryKey: ["event", [eventId]],
    queryFn: () => getEventById(eventId!),
});