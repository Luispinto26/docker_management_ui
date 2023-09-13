import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/database/'

const httpRequest = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export {httpRequest}