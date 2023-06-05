import { Link, useLocation } from "react-router-dom";
import { List } from '../../pages/Home/styled';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: #021a5f;
`;

const CollectionByQuery = ({ moviesByQuery }) => {
    const location = useLocation();
    return (
        <List>
            {moviesByQuery.map(({ id, original_title }) => {
                return <StyledLink key={id} to={`${id}`} state={{ from: location }}>{original_title}</StyledLink> 
            })}
        </List>
    );
};

export default CollectionByQuery;

CollectionByQuery.propTypes = {
    moviesByQuery: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.number.isRequired,
        original_title: PropTypes.string.isRequired,
    })),
};