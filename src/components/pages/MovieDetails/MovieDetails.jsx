import { useEffect } from "react"; 
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import api from '../../../services/themoviedb-api';


const  MovieDetails = () => {
    console.log('агов  MovieDetails!');
    // const [] = useState();
    const {movieId} = useParams();
    const navigate = useNavigate();
    const locationDetails = useLocation();

      
    useEffect(() => {
        const getMovieByID = async () => {     // основна ф-ція запиту на бекенд
            try {
                const { data } = await api.fetchMovieByID(movieId);   // запит на бекенд і відповідь
                console.log(data);
                // const filteredApiResponse = data.results.map(({ id, original_title, genres, overview, poster_path, popularity}) => ({ id, original_title, genres, overview, poster_path, popularity })); //shorthand; усі властивості не потрібні
                // setTrendingMovies(filteredApiResponse); // запис в стейт відфільтрованих фільмів
            } catch(error) {
              console.log(error.message); 
            }
        }
        getMovieByID();

    }, [movieId]);

    const handleClick = () => {
        navigate(locationDetails.state ?? '/')
    };

 return (
    <>
        <div>Це MovieDetails</div>
        <button type="button" onClick={handleClick}>Go back</button>
        <Outlet/>
    </>
 )
}

export default MovieDetails;