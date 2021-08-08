import { useState, useEffect } from 'react';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import { fetchMoviesId, IMAGE_URL } from '../services/api';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url } = useRouteMatch();

    // console.log(param);

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMoviesId(movieId).then(movie => {
            setMovie(movie);
        });
        }, [movieId])

    return (
        <>
            <h1>Movie</h1>
            
            {movie && (
                <>
                <img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>Rating: {movie.vote_average}</p>
                <p>Overview: {movie.overview}</p>
                
                </>
            )}

            
            
            <nav>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
                </nav>
                
            
            </>
    )
};