import { FC } from "react";
import CustomNavbar from "../components/navbar";
import {
    useQuery,
} from '@tanstack/react-query'
import { getFilms } from "../api/api";
import Spinner from 'react-bootstrap/Spinner';
import { Films } from "../components/films";

export const MainPage: FC = ({}) => {
    const getFilmsQuery = useQuery({
        queryKey: ['films'],
        queryFn: getFilms
    })

    if( getFilmsQuery.isLoading ){
        return ( 
            <div>
                <CustomNavbar />
                <Spinner className="spinner" animation="border" />
            </div>
        )
    }

    return(
        <div>
            <CustomNavbar />
            <div className="container main-layout-movies">
                <Films films={getFilmsQuery.data.results}/>
            </div>
        </div>
    )
}