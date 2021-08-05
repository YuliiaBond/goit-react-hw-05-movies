import React from 'react';
import MoviesGalleryItem from '../MoviesGalleryItem';
// import PropTypes from 'prop-types';

const MoviesGallery = ({ movies }) => {
    return (
        <ul>
            {movies.map(({ id, poster_path: posterPath, title }) => (
                <MoviesGalleryItem>
                    key={id}
                    posterPath={posterPath}
                    title={title}
                    id={id}
                </MoviesGalleryItem>
            ))}
        </ul>
    );
};

export default MoviesGallery;