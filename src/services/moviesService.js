import {apiService} from "./apiService";
import {urls} from "../configs";


const moviesService = {
    getAll:(page=1)=>apiService.get(urls.movies,{params:{page}}),
    getById:(id)=>apiService.get(`${urls.movie}/${id}`),
}

export {
    moviesService
}