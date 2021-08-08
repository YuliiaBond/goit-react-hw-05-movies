import { useState, useEffect } from 'react';
import { NavLink, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import { fetchMoviesId, IMAGE_URL } from '../services/api';
import styles from '../components/Navigation/Navigation.module.css';
import Cast from './Cast'
import Reviews from './Reviews';


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();

    // console.log(param);

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMoviesId(movieId).then(movie => {
            setMovie(movie);
            // console.log(movie)
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
                <p>Genres: {movie.genres.map(genre => genre.name).join(' ')}</p>
                
                </>
            )}

            <h3>Additional information</h3>
            
            <nav>
                <NavLink
                    to={`${url}/cast`}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    Cast
                </NavLink>
                <NavLink
                    to={`${url}/reviews`}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    Reviews
                </NavLink>
                </nav>
                
            <Switch>
                <Route path={`${path}/cast`}>
                    <Cast movieId={movieId} />
                </Route>

                <Route path={`${path}/reviews`}>
                    <Reviews movieId={movieId} />
                </Route>
            </Switch>
            
            </>
    )
};