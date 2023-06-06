import { Container, ContentWrapper, TextWrapper, Title, ScoreTitle, ScoreValue, PosterWrapper } from "./styled";
import PropTypes from 'prop-types';
import placeholderImg from '../../services/PlaceholderMoviePoster.jpg';

const MovieCard = ({ movie }) => {  //movie - це об'єкт
    const { original_title, genres, overview, poster_path, vote_average, release_date } = movie;  
    const date = new Date(release_date); // конвертація дати з 2023-03-02 в Thu Mar 02 2023 02:00:00 GMT+0200 щоб потім дістати рік
    return (
            <Container>
                <h2 className="visually-hidden">Selected Movie</h2>
                <ContentWrapper>
                    <PosterWrapper>
                        <img alt={original_title} src={ 
                            poster_path 
                            ? `https://image.tmdb.org/t/p/original/${poster_path}`
                            : placeholderImg
                        } />
                    </PosterWrapper>

                    <TextWrapper>
                        {original_title && <Title>{original_title} ({date && date.getFullYear()})</Title>}
                        
                        <ScoreTitle>User Score:  
                            {vote_average > 0 
                                ? <ScoreValue>{vote_average.toFixed(1) * 10}%</ScoreValue> //  {/* toFixed округлення дробових чисел (після коми 1 цифра)   */}
                                : <ScoreValue>No one has voted yet.</ScoreValue>
                            }
                        </ScoreTitle>
                         

                        <h4>Overview</h4>
                        <p>{overview ? overview : 'Not available'}</p>

                        {genres &&
                            <>
                                <h4>Genres</h4>
                                <p>{genres.length > 0 
                                    ? genres.map(genre => genre.name).join(", ") 
                                    : 'Not available'}
                                </p>
                            </>
                        }
                    </TextWrapper>
                </ContentWrapper>
            </Container>
    );
}

export default MovieCard;

// MovieCard.propTypes = {                                //  - не працює - undefined по кожн власт
//     movie: PropTypes.shape({
//         original_title: PropTypes.string.isRequired,
//         genres: PropTypes.array.isRequired,
//         overview: PropTypes.string.isRequired,
//         poster_path: PropTypes.string.isRequired,
//         vote_average: PropTypes.number.isRequired,
//         release_date: PropTypes.string.isRequired,
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