import axios from "axios";
import { ICharacter, IMovie, IPlanet } from "../types/types";

// api for fetching films
export const getFilms = async () => {
    const response = await axios.get("https://swapi.dev/api/films")
    const data = await response.data;
    return data;
}

// api for fetching character
export const getCharacter = async (url: string): Promise<ICharacter> => {
    const response = await axios.get(url)
    const data = await response.data;
    return data;
}

// api for fetching character by id
export const getCharacterById = async (id: string): Promise<ICharacter> => {
    const response = await axios.get(`https://swapi.dev/api/people/${id}`)
    const data = await response.data;
    return data;
}

// api for fetching film by id
export const getFilmById = async (url: string): Promise<IMovie> => {
    const response = await axios.get(url)
    const data = await response.data;
    return data;
}

// api for fetching planet by id
export const getPlanetById = async (url: string): Promise<IPlanet> => {
    const response = await axios.get(url)
    const data = await response.data;
    return data;
}