import React, { Component } from 'react';
import MoviesGallery from '../components/MoviesGallery';
import Loader from '../components/Loader';
import Button from '../components/Button';
import api from '../services/api';

class HomePage extends Component {
    state = {
        movies: [],
        currentPage: 1,
        isLoading: false,
        error: '',
    };

    async componentDidMount() {
        try {
            this.setState({ movies: [], currentPage: 1, error: '', isLoading: true })
            const { currentPage } = this.state;
            const movies = await api.fetchTrendingMovies(currentPage);
            this.addTrendingMovies(movies, currentPage);
        } catch (error) {
            this.setState({error: 'Ooopps!!!'})
        }
        
    }

    handleOnBtnClick = currentPage => () => {
        this.setState({ isLoading: true });
        api
            .fetchTrendingMovies(currentPage)
            .then(movies => this.addTrendingMovies(movies, currentPage))
            .then(
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                }),
            )
            .catch(error => this.setState({ error }))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    };

    addTrendingMovies = (movies, currentPage) => {
        this.setState({ movies, currentPage, error: '', isLoading: false });
    };

    render() {
        const { movies, error, isLoading } = this.state;
        return (
            <>
                <h1>Домашняя страница со списком популярных кинофильмов</h1>
                
                {error && <h2>Sorry!</h2>}

                <MoviesGallery movies={movies} />

                {isLoading && <Loader/>}
                
                {/* {movies.length > 19 && */}
                    {!isLoading && (
                    <Button onClick={this.handleOnBtnClick} />
                )}
            </>
        )
    }
};

export default HomePage;