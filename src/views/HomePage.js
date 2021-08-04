import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=08685f82d21c93cd92857dcadddfeb71&language=en-US')
        } catch (error) {
            
        }
        
        console.log(response.data);
        console.log(response.data.results);
        this.setState({ movies: response.data.results });
    }
    render() {
        console.log(this.props.match.url);
        return (
            <>
                <h1>домашняя страница со списком популярных кинофильмов</h1>
                
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${this.props.match.url}/${movie.id}/${movie.poster_path}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )

    }
    
};

export default HomePage;