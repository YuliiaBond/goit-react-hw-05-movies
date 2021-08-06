import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container'
import AppBar from './components/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
// import './style.css'

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        
        <Route>
          <NotFoundView />
        </Route>
      </Switch>

    </Container>
  )
}



// Ключ API (v3 auth)
// 08685f82d21c93cd92857dcadddfeb71
// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=08685f82d21c93cd92857dcadddfeb71

