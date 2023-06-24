import { IFilm } from "../types/types"
import { FC, useState } from "react";
import { Movie } from "./movie";
import { AiOutlineCalendar } from 'react-icons/ai';
import { PiSortAscendingBold } from 'react-icons/pi';

interface IProps {
    films: IFilm[]
}

export const Films: FC<IProps> = ({films}) => {
    const [movies, setMovies] = useState<IFilm[]>(films)
    const [sortByRelease, setSortByRelease] = useState<boolean>(true)
    
    const sortByReleaseDate = () => {
        let arr = [...movies]
        arr.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1)
        setMovies(arr)
        setSortByRelease(true)
    }

    const sortByEpisodeId = () => {
        let arr = [...movies]
        arr.sort((a, b) => (a.episode_id > b.episode_id) ? 1 : -1)
        setMovies(arr)
        setSortByRelease(false)
    }

    return(
        <>
            <div className="filter">
                <div className={`filter-half ${sortByRelease ? 'active' : ''}`} onClick={sortByReleaseDate}>
                    Sort by release date
                    <AiOutlineCalendar size={40}/>
                </div>
                <div className="verticalLine"></div>
                <div className={`filter-half ${sortByRelease ? '' : 'active'}`} onClick={sortByEpisodeId}>
                    Sort by episode id
                    <PiSortAscendingBold size={40}/>
                </div>
            </div>
            {
            movies.map((movie, index) => (
                <Movie movie={movie} index={index}/>
            ))
            }
        </>
    )
}