import { useState, useEffect, useRef } from "react"; 
import { useLocation, useNavigate, useParams, NavLink, Outlet } from "react-router-dom";
import api from '../../services/themoviedb-api';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loader from "components/Loader/Loader";
import { Suspense } from 'react';
import { ListContainer } from '../../components/Layout/styled';
import { GoBackBtn } from './styled';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    color:#b37606;
    &.active {
        color: #f9a504;
    }
`;

const  MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const permanentLocation = useRef(location.state?.from ?? '/');  // {current: {…}} => {pathname: '/', search: '', hash: '', state: null, key: ...
    //const permanentLocation = useRef('/');
    //console.log(permanentLocation);     // {current: {…}} => {pathname: '/', search: '', hash: '', state: null, key: ...

    useEffect(() => {
        const getMovieByID = async () => {     // основна ф-ція запиту на бекенд
            setLoading(true);
            try {
                const { data } = await api.fetchMovieByID(movieId);   // запит на бекенд і відповідь
                const filteredApiResponse = [data].map(({ original_title, genres, overview, poster_path, vote_average, release_date}) => ({ original_title, genres, overview, poster_path, vote_average, release_date })); //shorthand; усі властивості не потрібні
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
        navigate(permanentLocation.current);
    };

 return (
    <>
        <GoBackBtn type="button" onClick={handleClick}>Go back</GoBackBtn>
        <MovieCard movie={movie} />
        { loading && <Loader /> }
        <ListContainer>
            <li>
                <StyledLink to='cast'>Cast</StyledLink>   
            </li>
            <li>
                <StyledLink to='reviews'>Reviews</StyledLink>
            </li>       
        </ListContainer>
        <Suspense fallback={<div>Loadin...</div>}>
            <Outlet/>
        </Suspense>
    </>
 )
}

export default MovieDetails;