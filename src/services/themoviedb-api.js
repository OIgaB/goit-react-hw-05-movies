import axios from "axios";
// const API_KEY = 'a4250a03837bc1c40ada38b67b4134e3';
const BASE_URL = 'https://api.themoviedb.org/';


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI1MGEwMzgzN2JjMWM0MGFkYTM4YjY3YjQxMzRlMyIsInN1YiI6IjY0N2FmOGQ2ZTMyM2YzMDBjNDI5ZDU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v-u6MiKiDbohMjislfmvIWqj_E9JTpeDNp3nEaFfpD0'
    }
};

const fetchTrendingMovies = async () => {
    try {
        return await axios.get(`${BASE_URL}3/trending/movie/day?language=en-US&page=1`, options); 
    } catch(error) {
        throw new Error(error.message);
    }
}

const fetchMovieByID = async (movieID) => {
    try {
        return await axios.get(`${BASE_URL}3/movie/${movieID}?language=en-US&page=1`, options); 
    } catch(error) {
        throw new Error(error.message);
    }
}

const fetchCastByID = async (movieID) => {
    try {
        return await axios.get(`${BASE_URL}3/movie/${movieID}/credits?language=en-US&page=1`, options); 
    } catch(error) {
        throw new Error(error.message);
    }
}

const api = {
    fetchTrendingMovies,
    fetchMovieByID,
    fetchCastByID,
};

export default api;