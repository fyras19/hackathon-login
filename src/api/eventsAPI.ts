import { EventsResponse } from "../models/Event.model";
import { API } from "./utils";

export const getEvents = async (limit: number, page: number) => {
    const offset = (page - 1) * limit;
    const result = await API.post<EventsResponse>(`/get_filtered_events/?limit=${limit}&offset=${offset}`, {
        "order_by": "date",
        "only_upcoming_events": true
    });
    const hasNext = offset + limit < result.data.total_count;
    return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page : undefined,
        events: result.data.results
    }
}

export const getEventById = async (eventId: string) => {
    const result = await API.get<EventsResponse>(`/get_event_by_id/${eventId}`);
    return result.data.results[0]
}