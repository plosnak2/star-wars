import { IFilm } from "../types/types"
import { FC } from "react";

interface IProps {
    films: IFilm[]
}

export const Films: FC<IProps> = ({films}) => {
    return(
        <>
         {
            films.map((movie, index) => (
                <div className="movie">
                    <div className="movie-img-info">
                        <div className="movie-img">
                            <img src="https://placehold.co/350x200" width={350} height={200}/>
                        </div>
                        <div className="movie-info">
                            <h3>{movie.title} - {movie.release_date.toString()}</h3>
                            <p>{movie.opening_crawl}</p>
                        </div>
                    </div>
                    <div>
                        Characters
                    </div>
                </div>
            ))
         }
        </>
    )
}