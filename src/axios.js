import axios from 'axios';

// Base URL to request to the movie database
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
