import { IFilm } from "../types/types"
import { FC } from "react";
import Accordion from 'react-bootstrap/Accordion';
import {
    useQueries,
} from '@tanstack/react-query'
import { getCharacter } from "../api/api";
import Spinner from 'react-bootstrap/Spinner';
import { UseQueryResult } from "@tanstack/react-query";

interface IProps {
    movie: IFilm;
    index: number
}

export const Movie: FC<IProps> = ({movie,index}) => {
    const characterQueries = useQueries({
        queries: movie.characters.map((character) => {
          return {
            queryKey: ['character', character],
            queryFn: () => getCharacter(character),
          }
        }),
    })
    
    // TODO character type
    const charLoading = (character: UseQueryResult<any, unknown>) => character.isLoading;

    if(characterQueries.some(charLoading)) {
        return (
            <div className="movie" key={index}>
            <div className="movie-img-info">
                <div className="movie-img">
                    <img src="https://placehold.co/350x200" width={350} height={200} alt="Movie Placeholder"/>
                </div>
                <div className="movie-info">
                    <h3>{movie.title} - {movie.release_date.toString()}</h3>
                    <p>{movie.opening_crawl}</p>
                </div>
            </div>
            <div className="characters">
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header className="header">Characters</Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <Spinner className="spinner-characters" animation="border" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
        )
    }

    return(
        <div className="movie" key={index}>
            <div className="movie-img-info">
                <div className="movie-img">
                    <img src="https://placehold.co/350x200" width={350} height={200}/>
                </div>
                <div className="movie-info">
                    <h3>{movie.title} - {movie.release_date.toString()}</h3>
                    <p>{movie.opening_crawl}</p>
                </div>
            </div>
            <div className="characters">
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header className="header">Characters</Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            {
                                characterQueries.map((character, charIndex) =>(
                                    <div key={charIndex}>
                                        {character?.data?.name}
                                    </div>
                                ))
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}