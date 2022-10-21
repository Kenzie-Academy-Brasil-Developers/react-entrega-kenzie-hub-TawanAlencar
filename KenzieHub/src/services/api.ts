import axios from "axios"
import { AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com/',
    timeout: 2000
});

export default api;