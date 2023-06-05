import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../../services/themoviedb-api';
import Loader from "../../../components/Loader/Loader";
import CollectionByQuery from '../../../components/CollectionByQuery/CollectionByQuery';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const [moviesByQuery, setMoviesByQuery] = useState([]);
    const [loading, setLoading] = useState(false);
    const urlSearchParam = searchParams.get('query') ?? '';


    const handleChange = ({ target: {value} }) => { // глибока диструктуризація
        setQuery(value);
    }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            if(query === '') {
                return setSearchParams({});
            } else {
                setSearchParams({ query: query });
            }
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
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={handleChange}
                value={query}
            />
            <button type="submit">Search</button>
        </form>
        <CollectionByQuery moviesByQuery={moviesByQuery} />
        { loading && <Loader /> }
    </>
 )
}

export default Movies;