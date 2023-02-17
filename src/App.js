import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<Navigate to={'movies'}/>}/>

                <Route path={'movies'} element={<MoviesPage/>}>
                    <Route path={'movieDetails/:idMovie'} element={<MovieDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
