import axios from "axios";
import { IFilm } from "../types/types";

// api for fetching films
export const getFilms = async () => {
    const response = await axios.get("https://swapi.dev/api/films")
    const data = await response.data;
    return data;
}