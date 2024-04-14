import React from 'react'
import { useState, useEffect } from 'react';
import styles from './MovieGrid.module.css'
import { getMoviesBySearch } from '../API/OMDb';
import MovieCard from './MovieCard';
import Pagination from '@mui/material/Pagination'

const MovieGrid = ({search}) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [resultsLength, setResultsLength] = useState(0);
  const fetchMovies = async () => {
    const data = await getMoviesBySearch(search, page);
    setMovies(data.Search);
    setResultsLength(data.totalResults);
  }
  useEffect(() => {
    fetchMovies();
  }, [search, page]);


  return (
    <div className={styles.gridContainer}>
      {movies && <Pagination count={Math.ceil(resultsLength/10)} page={page} onChange={(e, value) => setPage(value)} sx={{marginBlock: '20px'}} />}
      <div  className={styles.MovieGrid}>
      {movies && movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
      {!movies && <h1>No Movies Found</h1>}
      </div>
    </div>
  )
}

export default MovieGrid
