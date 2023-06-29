import { FC } from "react";
import { ICharacter, IMovie } from "../types/types";
import {
    useQueries, useQuery, UseQueryResult
} from '@tanstack/react-query'
import { getFilmById, getPlanetById } from "../api/api";
import Spinner from 'react-bootstrap/Spinner';
import { Movie } from "./movie";
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

    const movies = filmQueries.map(film => {return film.data})
    
    return(
        <div>
            <div className="container main-layout-character">
                <div className="wrapper">
                    <div className="character-info">
                        <img src="https://placehold.co/200x300" width={200} height={300} alt="Star Wars" className="placehold-img"/>
                        <div className="character-info-about">
                            <h3>{character.name}</h3>
                            <p>Gender: {character.gender}</p>
                            <p>Height: {character.height}cm</p>
                            <p>Mass: {character.mass}kg</p>
                            <p>Eye Color: {character.eye_color}</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Skin Color: {character.skin_color}</p>
                        </div>
                    </div>
                    <div className="planet-info">
                        <img src="https://placehold.co/200x300" width={200} height={300} alt="Star Wars" className="placehold-img"/>
                        <div className="character-info-about">
                            <h3>Planet: {planet?.name}</h3>
                            <p>Population: {planet?.population}</p>
                            <p>Terrain: {planet?.terrain}</p>
                            <p>Rotation Period: {planet?.rotation_period}h</p>
                            <p>Climate: {planet?.climate}</p>
                            <p>Gravity: {planet?.gravity}</p>
                            <p>Diameter: {planet?.diameter}km</p>
                        </div>
                    </div>
                </div>
                <div className="character-movies">
                    {
                        movies.map((movie, index) => (
                            <div className="single-character-movie">
                                <Movie movie={movie as IMovie} index={index} showCharacters={false}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}