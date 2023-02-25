import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";
import './App.css'
import {SearchPage} from "./pages/SearchPage";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {

    return (
        <div className={"App"}>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:idMovie'} element={<MovieDetailsPage/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
