import { FC } from "react";
import {
    useQuery,
} from '@tanstack/react-query'
import { getFilms } from "../api/api";
import Spinner from 'react-bootstrap/Spinner';
import { Movies } from "../components/films";

export const MainPage: FC = ({}) => {
    // fetching information about movies
    const getFilmsQuery = useQuery({
        queryKey: ['films'],
        queryFn: getFilms
    })

    // if data are still being fetched (loading state) then spinner is displayed
    if( getFilmsQuery.isLoading ){
        return ( 
            <div>
                <Spinner className="spinner" animation="border" />
            </div>
        )
    }

    // otherwise components that display movies is displayed
    return(
        <div className="container main-layout-movies">
            <Movies films={getFilmsQuery.data.results}/>
        </div>
    )
}