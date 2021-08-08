import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Switch, Route, useParams, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import Loader from '../components/Loader'
import { fetchMoviesId, IMAGE_URL } from '../services/api';
import styles from '../components/Navigation/Navigation.module.css';

const Cast = lazy(() => import('./Cast') /* webpackChunkName: "Cast" */);
const Reviews = lazy(() => import('./Reviews') /* webpackChunkName: "Reviews" */);

export default function MovieDetailsPage() {
    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovie] = useState(null);
    
    // console.log(param);

    useEffect(() => {
        fetchMoviesId(movieId).then(movie => {
            setMovie(movie);
            // console.log(movie)
        });
    }, [movieId]);

    const onGoBack = () => {
        history.push(location?.state?.from ?? '/');
    }

    return (
        <>
            {movie && (
                <>
                    <button type="button" onClick={onGoBack}>Go Back</button>

                    <div>
                        <img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>Rating: {movie.vote_average}</p>
                        <p>Overview: {movie.overview}</p>
                        <p>Genres: {movie.genres.map(genre => genre.name).join(' ')}</p>
                    </div>

                    <hr />

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

                    <hr />
                    
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            <Route path={`${path}/cast`}>
                                <Cast movieId={movieId} />
                            </Route>

                            <Route path={`${path}/reviews`}>
                                <Reviews movieId={movieId} />
                            </Route>
                    </Switch>
                    </Suspense>
                </>
            )}
        </>
    )
};