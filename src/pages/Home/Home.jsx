import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import api from '../../services/themoviedb-api';
import { Title, List } from "./styled";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: #021a5f;
`;


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
        <List>
            {trendingMovies.map(({ id, original_title }) => (
                <StyledLink key={id} to={`movies/${id}`} state={{ from: location }}>{original_title}</StyledLink>     // <li> 
            ))}
        </List>
        </>
    )
}

export default Home;