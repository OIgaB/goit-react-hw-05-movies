import { List } from './styled';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
    color: #021a5f;
`;

const MovieList = ({ movies, location }) => {
    //console.log(location.pathname); //    якщо батько - Home: '/'; якщо батько - Movies: '/movies'     
    return (
        <List>
            {movies.map(({ id, original_title }) => (
                location.pathname === '/' 
                ? <StyledLink key={id} to={`movies/${id}`} state={{ from: location }}>{original_title}</StyledLink> 
                : <StyledLink key={id} to={`${id}`} state={{ from: location }}>{original_title}</StyledLink>       
            ))}  
        </List>
    )
}

export default MovieList;

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.number.isRequired,
        original_title: PropTypes.string.isRequired,
    })),
};