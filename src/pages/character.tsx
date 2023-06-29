import { FC } from "react";
import { useParams } from "react-router-dom";
import {
    useQuery
} from '@tanstack/react-query'
import { getCharacterById } from "../api/api";
import Spinner from 'react-bootstrap/Spinner';
import { CharacterComponent } from "../components/characterComponent";
import { ICharacter } from "../types/types";

export const CharacterPage: FC = ({}) => {
    // getting id from url
    const { id } = useParams();
    
    // fetching info about character
    const { data: character, isLoading } = useQuery({
        queryKey: ['character', id],
        queryFn: () => getCharacterById(id as string)
    })

    // if data are still being fetched (loading state) then spinner is displayed
    if( isLoading ){
        return ( 
            <div>
                <Spinner className="spinner" animation="border" />
            </div>
        )
    }

    return(
        <CharacterComponent character={character as ICharacter}/>
    )
}