import axios from "axios"

const api = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com/',
    timeout: 2000,
    headers: { 
        'Content-Type': 'Application/json',
        Authorization:`Bearer ${token}` }
});

export default api;