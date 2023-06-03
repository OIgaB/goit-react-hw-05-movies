import { useParams } from "react-router-dom";


const  MovieDetails = () => {
    const {movieId} = useParams();
    console.log('агов  MovieDetails!');
 return (
 <div>Це MovieDetails</div>
 )
}

export default MovieDetails;