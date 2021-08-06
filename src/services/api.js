const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '08685f82d21c93cd92857dcadddfeb71';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not fond'));
}

export function fetchTrendingMovies() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
}

export function fetchMoviesId(id) {
    return fetchWithErrorHandling(`${BASE_URL}/movies/${id}?api_key=${KEY}&language=en-US`);
}

export function fetchMovieSearch(name) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${KEY}&query=${name}&language=en-US&page=1&include_adult=false`);
}














// import axios from "axios";

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const KEY = '08685f82d21c93cd92857dcadddfeb71';

// const api = {
//     fetchTrendingMovies(currentPage) {
//         return axios
//             .get(`trending/movie/week?api_key=${KEY}&page=${currentPage}`)
//             .then(response => console.log(response.data.results));
        
//     }
// }

// export default api;