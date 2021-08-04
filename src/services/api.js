import axios from "axios";

axios.defaults.BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '08685f82d21c93cd92857dcadddfeb71';

const api = {
    fetchTrendingMovies(currentPage) {
        return axios
            .get(`trending/movie/week?api_key=${KEY}&page=${currentPage}`)
            .then(response => response.data.results);
    }
}

export default api;