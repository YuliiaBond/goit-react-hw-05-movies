import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesGalleryItem = ({ posterPath, title, id, location }) => (
    <li>
        <Link
            to={{
                pathname: `/movies/${id}`,
                state: { from: location },
            }}
        >
        
            <img
                src={
                    posterPath
                    ? `https://image.tmdb.org/t/p/w300${posterPath}`
                    : 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                    }
                alt={title}
            />
        </Link>
    </li>
);

MoviesGalleryItem.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.shape().isRequired,
};

export default MoviesGalleryItem;
