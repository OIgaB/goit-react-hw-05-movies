import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import api from '../../services/themoviedb-api';
import Loader from "../../components/Loader/Loader";
import ReviewsCard from '../../components/ReviewsCard/ReviewsCard';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getReviewsByID = async () => {     // основна ф-ція запиту на бекенд
            setLoading(true);
            try {
                const { data } = await api.fetchReviewByID(movieId);   // запит на бекенд і відповідь
                const filteredApiResponse = data.results.map(({ id, author, content, created_at, updated_at }) => ({ id, author, content, created_at, updated_at })); //shorthand; усі властивості не потрібні
                setReviews(filteredApiResponse); // запис в стейт відфільтрованих даних про відгуки
            } catch(error) {
              console.log(error.message); 
            } finally {
                setLoading(false);
            }
        }
        getReviewsByID();
    }, [movieId]);

    return (
        <>
            { loading && <Loader /> }
            <ReviewsCard reviews={reviews} />
        </>
    )
}

export default Reviews;