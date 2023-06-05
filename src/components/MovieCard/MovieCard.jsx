import { Container, ContentWrapper, TextWrapper, Title, ScoreTitle, ScoreValue, PosterWrapper } from "./styled";
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {  //movie - це об'єкт
    const { original_title, genres, overview, poster_path, vote_average, release_date } = movie;      
    const date = new Date(release_date); // конвертація дати з 2023-03-02 в Thu Mar 02 2023 02:00:00 GMT+0200 щоб потім дістати рік
        return (
            <Container>
                <h2 className="visually-hidden">Selected Movie</h2>
                <ContentWrapper>
                    <PosterWrapper>
                        {poster_path && <img alt="movie poster" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />}
                    </PosterWrapper>
                    <TextWrapper>
                        <Title>{original_title} ({date.getFullYear()})</Title>
                        {vote_average && 
                            <ScoreTitle>User Score: 
                                <ScoreValue>{vote_average.toFixed(1) * 10}%</ScoreValue>   {/* toFixed округлення дробових чисел (після коми 1 цифра)   */}
                            </ScoreTitle>
                        }  
                        <h4>Overview</h4>
                        <p>{overview}</p>
                        <h4>Genres</h4>
                        <p>{genres && genres.map(genre => genre.name).join(", ")}</p>
                    </TextWrapper>
                </ContentWrapper>
            </Container>
    );
}

export default MovieCard;

// MovieCard.propTypes = {
//     movie: PropTypes.shape({
//         original_title: PropTypes.string.isRequired,
//         genres: PropTypes.array,
//         overview: PropTypes.string,
//         poster_path: PropTypes.string,
//         vote_average: PropTypes.number,
//         release_date: PropTypes.string,
//     }),
// };

MovieCard.propTypes = {
        original_title: PropTypes.string,
        genres: PropTypes.array,
        overview: PropTypes.string,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number,
        release_date: PropTypes.string,
};