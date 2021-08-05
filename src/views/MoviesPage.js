import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css'


class MoviesPage extends Component {
    state = {
        movies: [],
        query: '',
        currentPage: 1,
        error: '',
    };

    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=08685f82d21c93cd92857dcadddfeb71&language=en-US')
        console.log(response.data);
        console.log(response.data.results);
        this.setState({ movies: response.data.results });
    }

    handleSubmit = event => {
        event.preventDefault();

        // this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    handleChange = event => {
        this.setState({ query: event.currentTarget.value });
    };

    onSubmit = query => {
    this.setState({ searchQuery: query, currentPage: 1, movies: [], error: null });
    };

    render() {
        // console.log(this.props.match.url);
        // const { query } = this.state;
        return (
            <>
                <h1>страница поиска фильмов по ключевому слову</h1>

                {/* <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        value={query}
                        onChange={this.handleChange}
                    />
                </form> */}

                {/* <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${this.props.match.url}/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul> */}
            </>
        )
    }
};
export default MoviesPage;