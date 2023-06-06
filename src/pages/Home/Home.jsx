import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from '../../services/themoviedb-api';
import { Title } from "./styled";
import MovieList from "../../components/MovieList/MovieList";


const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();
    
    const getTrendingMovies = async () => {     // основна ф-ція запиту на бекенд
        try {
            const { data } = await api.fetchTrendingMovies();   // запит на бекенд і відповідь
            const filteredApiResponse = data.results.map(({ id, original_title}) => ({ id, original_title })); //shorthand; усі властивості не потрібні
            setTrendingMovies(filteredApiResponse); // запис в стейт відфільтрованих фільмів
        } catch(error) {
            console.log(error.message); 
        }
    }
      
    useEffect(() => {
        getTrendingMovies();
    }, []);

    return (
        <>
            <Title>Trending today</Title>
            <MovieList movies={trendingMovies} location={location} />
        </>
    );
}

export default Home;