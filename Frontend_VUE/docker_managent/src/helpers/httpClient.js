import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost',
    headers: {
        'Content-Type': 'application/json',
    },
});

export {httpRequest}