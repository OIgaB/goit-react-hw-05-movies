import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from '../../../services/themoviedb-api';
import Loader from "../../Loader/Loader";
import CastCard from '../../CastCard/CastCard';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCastByID = async () => {     // основна ф-ція запиту на бекенд
            setLoading(true);
            try {
                const { data } = await api.fetchCastByID(movieId);   // запит на бекенд і відповідь
                const filteredApiResponse = data.cast.map(({ id, name, character, profile_path }) => ({ id, name, character, profile_path })); //shorthand; усі властивості не потрібні
                setCast(filteredApiResponse); // запис в стейт відфільтрованих даних про акторський склад              // console.log(...filteredApiResponse);
            } catch(error) {
              console.log(error.message); 
            } finally {
                setLoading(false);
            }
        }
        getCastByID();

    }, [movieId]);
    
 return (
    <>
        <div>Це Cast</div>
        { loading && <Loader /> }
        <CastCard cast={cast} />
    </>
 )
}

export default Cast;