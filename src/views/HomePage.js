import React, {Component} from 'react';
import axios from 'axios';

class HomePage extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=08685f82d21c93cd92857dcadddfeb71&language=en-US')
        console.log(response.data);
        console.log(response.data.results);
        this.setState({ movies: response.data.results });
    }
    render() {
        return (
            <>
                <h1>домашняя страница со списком популярных кинофильмов</h1>
                
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            </>
        )

    }
    
};

export default HomePage;