import React, {useEffect} from 'react';
import axios from "axios";

const GenreBadge = () => {


    useEffect(() => {

        const promise = axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=287e1d57bcd3306fb02250a185070bbf');
        console.log(promise);

    }, []);
    return (
        <div>

        </div>
    );
};

export {
    GenreBadge
};