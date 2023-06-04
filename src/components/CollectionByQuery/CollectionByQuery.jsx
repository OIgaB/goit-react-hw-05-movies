import { Link, useLocation } from "react-router-dom";

const CollectionByQuery = ({ moviesByQuery }) => {
    const location = useLocation();

    return (
        <ul>
            {moviesByQuery.map(({ id, original_title }) => {
                return <Link key={id} to={`${id}`} state={{ from: location }}>{original_title}</Link> 
            })}

        </ul>
    );
};

export default CollectionByQuery;