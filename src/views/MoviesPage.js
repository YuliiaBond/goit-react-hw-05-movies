import { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar';
import MoviesGallery from '../components/MoviesGallery';
import { fetchMovieSearch } from '../services/api';

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        if (!query) {
            return;
        }

        fetchMovieSearch(query).then(request => {
            setMovies(request.results);
        });
    },[query])

    const onClick = request => {
        setQuery(request);
}

    return (
        <>
            <Searchbar onSubmit={onClick} />
            
            {movies && <MoviesGallery movies={movies} />}
        </>
    )
};