import { useQuery } from "@tanstack/react-query";
import { getHoods } from "../api/eventsAPI";

export const useGetHoods = () => useQuery({
    queryKey: ['hoods'],
    queryFn: getHoods
})