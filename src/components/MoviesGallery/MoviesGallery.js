import React from 'react';
import MoviesGalleryItem from '../MoviesGalleryItem';
// import PropTypes from 'prop-types';

const MoviesGallery = ({ movies }) => {
    return (
        <ul>
            {movies.map(({ id, poster_path: posterPath, title }) => {
                return (
                    <li key={id}>
                        <MoviesGalleryItem>
                            posterPath={posterPath};
                            title={title}
                            id={id}
                        </MoviesGalleryItem>
                    </li>
                );
            })
            }
        </ul>
    );
};

// MoviesGallery.propTypes = {
//     movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };

export default MoviesGallery;