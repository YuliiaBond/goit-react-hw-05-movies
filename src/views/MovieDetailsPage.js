import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Cast from './Cast';
// import Reviews from './Reviews';

class MovieDetailsPage extends Component {
   

    render() {
        // const { match } = this.props;
        
        return (
            <>
                <h1>страница с детальной информацией о кинофильме</h1>

               {/* 
                {this.state.movies.map(movie => (
                    <img src={`${this.props.match.url}/${backdrop_path}`} alt="" />
                    
                ))} */}
                
                

                {/* <ul>
                    <li>
                        <NavLink to={`${match.url}/${movie.id}/cast`} className="NavLink" activeClassName="NavLink--active">Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/${movie.id}/reviews`} className="NavLink" activeClassName="NavLink--active">Reviews</NavLink>
                    </li>
                </ul> */}

                {/* <Route path={`${match.path}/:movieId/cast`} component={Cast}></Route> */}
                {/* <Route path={`${match.path}/:movieId/reviews`} component={Reviews}></Route> */}
            </>
        )
    }
    
};

export default MovieDetailsPage;