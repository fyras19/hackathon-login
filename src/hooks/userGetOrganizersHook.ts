import { useQuery } from "@tanstack/react-query";
import { getOrganizers } from "../api/eventsAPI";

export const useGetOrganizers = () => useQuery({
    queryKey: ['organizers'],
    queryFn: getOrganizers
})