import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import { addReviewToMovie } from '../Firebase/Firebase';
import styles from './ReviewForm.module.css';



const ReviewForm = ({ movie }) => {


  const handleSubmit = async (e) => {
    const form = e.target;
    e.preventDefault();
    const formData = new FormData(form);
    const review = {
      Name: formData.get('name'),
      Rating: formData.get('rating'),
      Content: formData.get('comment'),
    };

    if (!review.Name || !review.Rating || !review.Content) {
      alert('Please fill in all fields');
      return;
    }
    await addReviewToMovie(movie.imdbID, review.Name, review.Rating, review.Content).then(() => {
      form.reset();
      window.location.reload();
    });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Write a Review
      </Typography>
      <form onSubmit={handleSubmit} className={styles.ReviewForm}>
        <TextField id="name" name="name" label="Your Name" variant="outlined" />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating id="rating" name="rating" />
        </Box>
        <TextField sx={{width: '100%'}} id="comment" name="comment" label={`Review ${movie?.Title}`} variant="outlined" multiline rows={3} />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ReviewForm;