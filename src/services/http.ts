import axios from 'axios';

const http = axios.create({
    baseURL: '/api/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json', // Set default headers if needed
    }
});

export default http;
