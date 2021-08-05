import React from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container'
// import { Route, NavLink, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import Cast from './views/Cast';
// import Reviews from './views/Reviews';
// import NotFoundView from './views/NotFoundView';
// import './style.css'

export default function App() {
  return (
    <Container>
      <AppBar />
    </Container>
  )
}


// const App = () => ( 
//   <>
//     <ul>
//       <li>
//         <NavLink exact to="/" className="NavLink" activeClassName="NavLink--active">HomePage</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/movies" className="NavLink" activeClassName="NavLink--active">MoviesPage</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/movies/:movieId" className="NavLink" activeClassName="NavLink--active">MovieDetailsPage</NavLink>
//       </li>
//       {/* <li>
//         <NavLink to="/movies/:movieId/cast" className="NavLink" activeClassName="NavLink--active">Cast</NavLink>
//       </li>
//       <li>
//         <NavLink to="/movies/:movieId/reviews" className="NavLink" activeClassName="NavLink--active">Reviews</NavLink>
//       </li> */}
//     </ul>

//     <Switch>
//       <Route exact path="/" component={HomePage}></Route>
//       <Route exact path="/movies" component={MoviesPage}></Route>
//       <Route exact path="/movies/:movieId" component={MovieDetailsPage}></Route>
//       {/* <Route path="/movies/:movieId/cast" component={Cast}></Route>
//       <Route path="/movies/:movieId/reviews" component={Reviews}></Route> */}
//       <Route component={NotFoundView}></Route>
//     </Switch>
    
//   </>
// );


// export default App;

// Ключ API (v3 auth)
// 08685f82d21c93cd92857dcadddfeb71
// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=08685f82d21c93cd92857dcadddfeb71

