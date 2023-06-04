import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../../services/themoviedb-api';
import Loader from "../../../components/Loader/Loader";
import CollectionByQuery from '../../../components/CollectionByQuery/CollectionByQuery';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesByQuery, setMoviesByQuery] = useState([]);
    const [loading, setLoading] = useState(false);
    const query = searchParams.get('query') ?? '';


    const handleChange = ({ target: {value} }) => { // глибока диструктуризація
        if(value === '') {
            return setSearchParams({});
        } else {
            setSearchParams({ query: value });
        }
    }
        // useEffect(() => { - не працює
        //     const handler = setTimeout(() => {
        //         setSearchParams({ query: value });
        //     }, 300);
        //     return() => {
        //         clearTimeout(handler);
        //     }
        // }, [value])
    
        const handleSubmit = (event) => {
            event.preventDefault();

        }

        useEffect(() => {
            const getCollectionByQuery = async () => {     // основна ф-ція запиту на бекенд
                setLoading(true);
                try {
                    const { data } = await api.fetchCollectionByQuery(query);   // запит на бекенд і відповідь
                    const filteredApiResponse = data.results.map(({ id, original_title }) => ({ id, original_title })); //shorthand; усі властивості не потрібні
                    setMoviesByQuery(filteredApiResponse); // запис в стейт відфільтрованих даних про фільм
                } catch(error) {
                  console.log(error.message); 
                } finally {
                    setLoading(false);
                }
            }
            getCollectionByQuery();
    
        }, [query]);


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