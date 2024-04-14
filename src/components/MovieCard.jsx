import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=';
    }

    return (
        <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='glass movieCard' >
                <img src={movie.Poster} alt='movie' style={{ width: '100%', height: '250px', objectFit: 'cover' }} onError={handleImageError} />
                <h2 style={{ fontSize: '1rem', marginTop: '0.5rem' }}>{movie.Title}</h2>
            </div>
        </Link>
    );
};

export default MovieCard;