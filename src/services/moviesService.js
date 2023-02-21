import {apiService} from "./apiService";
import {urls} from "../configs";


const moviesService = {
    getAll:(page=1,ids='')=>apiService.get(`${urls.movies}`,{params:{page:page,with_genres:ids}}),
    getById:(id)=>apiService.get(`${urls.movie}/${id}?api_key=287e1d57bcd3306fb02250a185070bbf`),
    search:(query='',page=1)=>apiService.get(`${urls.search}&query=${query}&page=${page}`),
}

export {
    moviesService
}