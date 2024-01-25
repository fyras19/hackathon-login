import { useQuery } from "@tanstack/react-query"
import { getThemes } from "../api/eventsAPI"

export const useGetThemes = () => {
    return useQuery({
        queryKey: ['themes'],
        queryFn: getThemes
    })
}