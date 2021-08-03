import React, { Component } from 'react';
import axios from 'axios';

class MovieDetailsPage extends Component {
    state = {
        movie: null,
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=08685f82d21c93cd92857dcadddfeb71`)
        // console.log(response.data);
        this.setState({ movie: response.data });
    }

    render() {
        return (
            <>
                <h1>страница с детальной информацией о кинофильме {this.props.match.movieId}</h1>

                <img src={this.state.backdrop_path} alt="" />
                <h2>{this.state.title}</h2>
            </>
        )
    }
    
};

export default MovieDetailsPage;