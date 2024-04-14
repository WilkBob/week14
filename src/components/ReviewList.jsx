import React from 'react'
import styles from './ReviewList.module.css'
import { getReviews, getReviewsByMovie } from '../Firebase/Firebase'
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
const ReviewList = ({movie}) => {
    const [reviews, setReviews] = React.useState([]);
    const fetchReviews = async () => {
        if (movie) {
            const data = await getReviewsByMovie(movie.imdbID);
            setReviews(data);
        }
    }
    React.useEffect(() => {
        fetchReviews();
    }, [movie])

    const avgRating = (reviews) => {
        let total = 0;
        reviews.forEach(review => {
            total += review.Rating;
        });
        return total / reviews.length;
    }
    
  return (
    
    <div className={styles.ReviewListContainer}>
    {reviews.length > 0 ? (
        <>
            <Typography variant='h4'>Reviews for {movie.Title}</Typography>
            <hr/>
            <div className={styles.ReviewList}>
                {reviews.map((review, index) => (
                <div key={index} className={styles.Review}>
                    <h3>{review.Name}</h3>
                    <p>{review.Content}</p>
                    <Rating value={parseFloat(review.Rating)} readOnly />
                </div>
                ))}
            </div>
        </>
    ) : (
        <p>No reviews yet.</p>
    )}
</div>
  )
}

export default ReviewList
