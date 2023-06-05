import { Notification, ListItem, Author } from './styled';
import PropTypes from 'prop-types';

const ReviewsCard = ({ reviews }) => {
    return (
        <>
            {reviews.length === 0 && <Notification>We don't have any reviews for this movie</Notification>}
            <ul>
                {reviews.map(({ id, author, content, created_at, updated_at }) => {
                    const creationDate = new Date(created_at).toLocaleString();
                    const updateDate = new Date(updated_at).toLocaleString();
                    return <ListItem key={id}>
                            <Author>Author: <span>{author}</span></Author>
                            <p>{content}</p>
                            <p>Created: <span>{creationDate}</span></p>
                            {creationDate !== updateDate && <p>Updated: <span>{updateDate}</span></p>}
                        </ListItem>
                })}
            </ul>
        </>
    )    
}

export default ReviewsCard;

ReviewsCard.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
    }))
};