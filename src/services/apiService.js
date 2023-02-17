import axios from "axios";
import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODdlMWQ1N2JjZDMzMDZmYjAyMjUwYTE4NTA3MGJiZiIsInN1YiI6IjYzZWU3NTgyOGU4NzAyMDBkYzdkYjY2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tW82CAPrQIAJHYtGVgP4VYKnpnv6JCsDWLjylW09D2E'

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {
    apiService
}