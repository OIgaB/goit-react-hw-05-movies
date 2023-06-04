import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import api from '../../../services/themoviedb-api';


const Home = () => {
    // console.log('агов Home!');
    const [trendingMovies, setTrendingMovies] = useState([]);

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

    const location = useLocation();

    return (
        <>
        <h2>Trending today</h2>
        <ul>
            {
                trendingMovies.map(({ id, original_title }) => (
                    <Link key={id} to={`movies/${id}`} state={{ from: location }}>{original_title}</Link>     // <li> 
                ))
            }
        </ul>
        </>
    )
}

export default Home;