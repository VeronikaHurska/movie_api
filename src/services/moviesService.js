import {apiService} from "./apiService";
import {urls} from "../configs";


const moviesService = {
    getAll:(page=1)=>apiService.get(urls.movies,{params:{page}}),
    getById:(id)=>apiService.get(`${urls.movie}/${id}?api_key=287e1d57bcd3306fb02250a185070bbf`),
    search:(query='',page=1)=>apiService.get(`${urls.search}`,{params:{page,query}})
}

export {
    moviesService
}