import axios from 'axios';

const ax = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default ax ;