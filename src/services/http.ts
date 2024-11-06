import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000/api/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json', // Set default headers if needed
        //'Authorization': 'Bearer YOUR_TOKEN' // Add your authorization token if needed
    }
});

export default http;
