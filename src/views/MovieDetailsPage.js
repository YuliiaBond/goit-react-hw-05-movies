import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesId, IMAGE_URL } from '../services/api';

export default function MovieDetailsPage() {
    const {movieId} = useParams();

    // console.log(param);

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMoviesId(movieId).then(setMovie);
    }, [movieId])

    return (
        <>
        <h1>`Movie ${movieId}`</h1>

        {movie && <>
                <img src={`IMAGE_URL${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>Rating: {movie.vote_average}</p>
                <p>Overview: {movie.overview}</p>
                </>}
            </>
    )
};