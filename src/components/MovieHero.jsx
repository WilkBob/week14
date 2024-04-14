import React from 'react'
import './MovieHero.css'
import Rating from '@mui/material/Rating';
const MovieHero = (movie) => {

    const {Title, Poster, Year, Rated, imdbRating, Plot } = movie.movie;
  return (

        <div className="movie-hero glass">
            <img src={Poster} alt={Title} />
            <div className="movie-hero-info">
            <h1 id='title'>{Title}</h1>
            <p id='year'><b>Released:</b> {Year}</p>
            <p id='rated'><b>Rating:</b> {Rated}</p>
            <p id='imdbRating'><b>IMDb Score:</b> {imdbRating}</p>
            <Rating value={imdbRating / 2} precision={0.1} readOnly/> ({imdbRating / 2}/5)
            <h3>Summary</h3>
            <hr />
            <p id='plot'>{Plot}</p>
            </div>
        </div>

   
  )
}

export default MovieHero
