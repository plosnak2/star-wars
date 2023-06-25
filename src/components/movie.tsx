import { IMovie } from "../types/types"
import { FC } from "react";
import Accordion from 'react-bootstrap/Accordion';
import {
    useQueries,
} from '@tanstack/react-query'
import { getCharacter } from "../api/api";
import Spinner from 'react-bootstrap/Spinner';
import { UseQueryResult } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';

interface IProps {
    movie: IMovie;
    index: number
}

export const Movie: FC<IProps> = ({movie,index}) => {
    const navigate = useNavigate();
    // queries that fetches information about every single character in given movie
    const characterQueries = useQueries({
        queries: movie.characters.map((character) => {
          return {
            queryKey: ['character', character],
            queryFn: () => getCharacter(character),
          }
        }),
    })
    
    const charLoading = (character: UseQueryResult<any, unknown>) => character.isLoading;

    // if some of the queryFn is still loading (data are not ready yet) then spinner is shown otherwise characters are displayed
    return(
        <div className="movie" key={index}>
            <div className="movie-img-info">
                <div className="movie-img">
                    <img src="https://placehold.co/350x200" width={350} height={200} alt="Star Wars"/>
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
                                characterQueries.some(charLoading) ? 
                                <Spinner className="spinner-characters" animation="border" />
                                : characterQueries.map((character: UseQueryResult<any, unknown>, charIndex: number) =>(
                                    <div className="character-link" key={charIndex} onClick={() => navigate('character/' + character.data.url.split('/')[character.data.url.split('/').length - 2])}>
                                        {character.data.name}
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