import React from 'react';
import {Link, useFormAction, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {useTheme} from "../../hooks/useTheme";


const Header = () => {
    const {theme, setTheme} = useTheme();
    const navigate = useNavigate();
    const switchTheme = (theme) => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className={css.Header}>
            <i className="fa-light fa-film"></i>
            <button className={css.button} onClick={() =>navigate('/movies')}>MOVIES</button>
            {/*<Link className={css.button} to={'/movies'}>MOVIES</Link>*/}
            <button className={css.button} onClick={()=>navigate('/search')}>SEARCH</button>
            {/*<Link className={css.button} to={'/search'}>SEARCH</Link>*/}
            <button className={css.button} onClick={() => switchTheme(theme)}>{(theme === 'light') ? 'DARK THEME' : 'LIGHT THEME'}</button>
            <UserInfo/>
        </div>
    );
};

export {
    Header
};