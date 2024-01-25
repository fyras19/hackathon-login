import { useQuery } from "@tanstack/react-query";
import { getCities } from "../api/eventsAPI";

export const useGetCities = () => useQuery({
    queryKey: ['cities'],
    queryFn: getCities
})