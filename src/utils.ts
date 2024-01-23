import axios from "axios";
import { Arret } from "./models/Arret.model";
import { Horaire } from "./models/Horaire.model";
import { RemainingTime } from "./models/RemainingTime.model";
import { EventsResponse } from "./models/Event.model";

const URL = `https://hackathon-login.osc-fr1.scalingo.io`;

export const getEvents = async (limit: number, page: number) => {
    const offset = (page-1) * limit;
    const result = await axios.get<EventsResponse>(`https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-nantes-metropole/records?limit=${limit}&offset=${offset}`);
    const hasNext = offset + limit < result.data.total_count;
    return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page : undefined,
        events: result.data.results
    }
}

export const getPaginated = (data: Array<object>, page: number) => {
    const hasNext = page * 10 < data.length;
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        arrets: data.slice(startIndex, endIndex)
    }
}

export const getStopsPaginated = (data: Arret[], page: number, filter: string = '') => {
    const json = data.filter((arret) => arret.libelle.includes(filter));
    const paginated = getPaginated(json, page);
    return { ...paginated, arrets: paginated.arrets as Arret[] }
}

export const getStops = async () => {
    const result = await axios.get<Omit<Arret, "id">[]>(`${URL}/get_all_stations/`);
    return result.data.map((arret, i) => { return { ...arret, id: i } as Arret });
}

export const getNearbyStops = async (latitude: string, longitude: string) => {
    const result = await axios.get<Omit<Arret, "id">[]>(`${URL}/get_nearest_stations/${latitude}/${longitude}`);
    return result.data.map((arret, i) => { return { ...arret, id: i } as Arret })
}

export const getHoraires = async (codeArret: string, numLigne: string, sense: "1" | "2", date?: string) => {
    if (!date) {
        const result = await axios.get<Horaire>(`${URL}/get_timetable/${codeArret}/${numLigne}/${sense}`);
        return result.data;
    }
    const result = await axios.get<Horaire>(`${URL}/get_timetable_by_date/${codeArret}/${numLigne}/${sense}/${date}`);
    return result.data;
}

export const getWaitingTime = async (codeArret: string) => {
    const result = await axios.get<Omit<RemainingTime, "id">[]>(`${URL}/get_waitingtime_by_station/${codeArret}`);
    return result.data.map((time, i) => { return { ...time, id: i } as RemainingTime });
}