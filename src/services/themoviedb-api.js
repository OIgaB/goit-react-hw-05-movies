import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/';

const options = { // загальні параметри для усіх запитів на бекенд
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

const fetchReviewByID = async (movieID) => {
    try {
        return await axios.get(`${BASE_URL}3/movie/${movieID}/reviews?language=en-US&page=1`, options); 
    } catch(error) {
        throw new Error(error.message);
    }
}

const fetchCollectionByQuery = async (keyword) => {
    try {
        return await axios.get(`${BASE_URL}3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`, options); 
    } catch(error) {
        throw new Error(error.message);
    }
}


const api = {
    fetchTrendingMovies,
    fetchMovieByID,
    fetchCastByID,
    fetchReviewByID,
    fetchCollectionByQuery,
};

export default api;