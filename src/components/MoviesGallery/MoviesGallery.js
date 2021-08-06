import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// import PropTypes from 'prop-types';

const MoviesGallery = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
        <Link
            to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
            }}
        >
        
            <img
                src={
                    movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                    }
                alt={movie.title}
            />
        </Link>
    </li>
            ))}
        </ul>
    );
};

export default MoviesGallery;