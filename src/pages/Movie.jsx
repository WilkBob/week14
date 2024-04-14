import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { getMovieById } from '../API/OMDb';
import MovieHero from '../components/MovieHero';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const fetchMovie = async () => {
        const data = await getMovieById(id)
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie();
    }, [id])
  return (
    <div>
      {!movie && <h1>Loading...</h1>}
      {movie && <MovieHero movie={movie} />}
      <ReviewForm movie={movie} />
      <ReviewList movie={movie} />
    </div>
  )
}

export default Movie
