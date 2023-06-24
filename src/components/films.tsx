import { IMovie } from "../types/types"
import { FC, useState } from "react";
import { Movie } from "./movie";
import { AiOutlineCalendar } from 'react-icons/ai';
import { PiSortAscendingBold } from 'react-icons/pi';

interface IProps {
    films: IMovie[]
}

export const Movies: FC<IProps> = ({films}) => {
    // holding state for movies (for sorting)
    const [movies, setMovies] = useState<IMovie[]>(films)
    // state that handles sorting information
    const [sortByRelease, setSortByRelease] = useState<boolean>(true)
    
    // function for sorting by release date
    const sortByReleaseDate = () => {
        let arr = [...movies]
        arr.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1)
        setMovies(arr)
        setSortByRelease(true)
    }

    // function for sorting by chronological order
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
                    Sort by release date <br />
                    <AiOutlineCalendar size={40}/>
                </div>
                <div className="verticalLine"></div>
                <div className={`filter-half ${sortByRelease ? '' : 'active'}`} onClick={sortByEpisodeId}>
                    Sort by episode id <br />
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