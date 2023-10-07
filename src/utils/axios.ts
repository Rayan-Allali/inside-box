// setup the axios instance
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axiosInstance;