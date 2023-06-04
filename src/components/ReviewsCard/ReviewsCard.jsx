const ReviewsCard = ({ reviews }) => {
    return (
        <>
            {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
            <ul>
                {reviews.map(({ id, author, content, created_at, updated_at }) => {
                    const creationDate = new Date(created_at).toLocaleString();
                    const updateDate = new Date(updated_at).toLocaleString();
                    return <li key={id}>
                            <p>Author: <span>{author}</span></p>
                            <p>{content}</p>
                            <p>Created: <span>{creationDate}</span></p>
                            {creationDate !== updateDate && <p>Updated: <span>{updateDate}</span></p>}
                        </li>
                })}
            </ul>
        </>
    )    
}

export default ReviewsCard;