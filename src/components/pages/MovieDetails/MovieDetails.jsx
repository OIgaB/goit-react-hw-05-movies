import { useState, useEffect } from "react"; 
import { useLocation, useNavigate, useParams, Link, Outlet } from "react-router-dom";
import api from '../../../services/themoviedb-api';
import MovieCard from '../../MovieCard/MovieCard';
import Loader from "components/Loader/Loader";
import { Suspense } from 'react';


const  MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const locationDetails = useLocation();

      
    useEffect(() => {
        const getMovieByID = async () => {     // основна ф-ція запиту на бекенд
            setLoading(true);
            try {
                const { data } = await api.fetchMovieByID(movieId);   // запит на бекенд і відповідь
                const filteredApiResponse = [data].map(({ id, original_title, genres, overview, poster_path, vote_average, release_date}) => ({ id, original_title, genres, overview, poster_path, vote_average, release_date })); //shorthand; усі властивості не потрібні
                setMovie(...filteredApiResponse); // запис в стейт відфільтрованих даних про фільм
            } catch(error) {
              console.log(error.message); 
            } finally {
                setLoading(false);
            }
        }
        getMovieByID();

    }, [movieId]);

    const handleClick = () => {
        navigate(locationDetails.state ?? '/')
    };

 return (
    <>
        <button type="button" onClick={handleClick}>Go back</button>
        { loading && <Loader /> }
        <MovieCard movie={movie} />
        <ul>
            <li>
                <Link to='cast'>Cast</Link>   
            </li>
            <li>
                <Link to='reviews'>Reviews</Link>
            </li>       
        </ul>
        <Suspense fallback={<div>Loadin...</div>}>
            <Outlet/>
        </Suspense>
    </>
 )
}

export default MovieDetails;