import { IFilm } from "../types/types"
import { FC, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Movie } from "./movie";

interface IProps {
    films: IFilm[]
}

export const Films: FC<IProps> = ({films}) => {
    const [movies, setMovies] = useState<IFilm[]>(films)
    return(
        <>
         {
            movies.map((movie, index) => (
                <Movie movie={movie} index={index}/>
            ))
         }
        </>
    )
}