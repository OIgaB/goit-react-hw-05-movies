import { List, Name, ListItem, ImageWrapper } from './styled';
import PlaceholderImg from '../../services/placeholderImg.png';
import PropTypes from 'prop-types';

const CastCard = ({ cast }) => {
    return (
            <List>
                {cast && cast.map(({id, profile_path, name, character}) => {
                    return <ListItem key={id}>
                        <ImageWrapper>
                            {profile_path && <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="actor" />}
                            {!profile_path && <img src={PlaceholderImg} alt="placeholder" />}
                        </ImageWrapper>
                        <Name>{name}</Name>
                        {character && <p>Character: <span>{character}</span></p>}
                    </ListItem>  
                })}
            </List>
    );
}

export default CastCard;

CastCard.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
    })),
};