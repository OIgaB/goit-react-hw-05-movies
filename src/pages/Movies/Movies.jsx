import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/themoviedb-api';
import Loader from "../../components/Loader/Loader";
import Form from '../../components/Form/Form';
import MovieList from '../../components/MovieList/MovieList';
import { useLocation } from "react-router-dom";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesByQuery, setMoviesByQuery] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const urlSearchParam = searchParams.get('query') ?? '';

        const handleSubmit = (query) => {
            // if(query === '') {
            //     return setSearchParams({});
            // } else {
                setSearchParams({ query: query });
            // }
        }

        useEffect(() => {
            const getCollectionByQuery = async () => {     // основна ф-ція запиту на бекенд
                setLoading(true);
                try {
                    const { data } = await api.fetchCollectionByQuery(urlSearchParam);   // запит на бекенд і відповідь
                    const filteredApiResponse = data.results.map(({ id, original_title }) => ({ id, original_title })); //shorthand; усі властивості не потрібні
                    setMoviesByQuery(filteredApiResponse); // запис в стейт відфільтрованих даних про фільм
                } catch(error) {
                  console.log(error.message); 
                } finally {
                    setLoading(false);
                }
            }
            getCollectionByQuery();
    
        }, [urlSearchParam]);

    return (
        <>
            <Form onSubmit={handleSubmit} />
            {moviesByQuery.length > 0 && <MovieList movies={moviesByQuery} location={location} />}
            { loading && <Loader /> }
        </>
    )
}

export default Movies;