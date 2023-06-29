import { FC } from "react";
import { ICharacter } from "../types/types";
import {
    useQueries, useQuery, UseQueryResult
} from '@tanstack/react-query'
import { getFilmById, getPlanetById } from "../api/api";
import Spinner from 'react-bootstrap/Spinner';

interface IProps {
    character: ICharacter
}

export const CharacterComponent: FC<IProps> = ({character}) => {
    
    // queries that fetches information about every single movie that character plays in
    const filmQueries = useQueries({
        queries:character.films.map((film) => {
          return {
            queryKey: ['film', film],
            queryFn: () => getFilmById(film)
          }
        }),
    })

    // fetching info about planet
    const { data: planet, isLoading: isPlanetLoading } = useQuery({
        queryKey: ['planet', character.homeworld],
        queryFn: () => getPlanetById(character.homeworld)
    })

    const movieLoading = (movie: UseQueryResult<any, unknown>) => movie.isLoading;

    if(isPlanetLoading || filmQueries.some(movieLoading)) {
        return ( 
            <div>
                <Spinner className="spinner" animation="border" />
            </div>
        )
    }

    return(
        <div>
            <div className="container main-layout-movies">
                character info
            </div>
        </div>
    )
}