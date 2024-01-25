import { Filter } from "../components/events/FiltersSection";
import { EventsResponse } from "../models/Event.model";
import { API } from "./utils";

export const getEvents = async (limit: number, page: number, filters: Filter[]) => {
    const offset = (page - 1) * limit;
    const eventFilters = filters.map(filter => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const eventFilter: any = {};
        eventFilter[filter.label] = filter.options;
        return eventFilter
    });
    const result = await API.post<EventsResponse>(`/get_filtered_events/?limit=${limit}&offset=${offset}`, {
        "order_by": "date",
        "only_upcoming_events": true,
        filters: eventFilters
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

export const getThemes = async () => {
    const result = await API.get<string[]>('/get_theme/');
    return result.data;
}

export const getCities = async () => {
    const result = await API.get<string[]>('/get_city/');
    return result.data;
}

export const getOrganizers = async () => {
    const result = await API.get<string[]>('/get_organizer/');
    return result.data;
}

export const getHoods = async () => {
    const result = await API.get<string[]>('/get_hood/');
    return result.data;
}