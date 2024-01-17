import axios from "axios";
import { Arret } from "./models/Arret.model";

const URL = `https://hackathon-login.osc-fr1.scalingo.io`;

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