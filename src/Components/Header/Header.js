import React from 'react';
import {useNavigate} from "react-router-dom";

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
            <button className={css.button} onClick={() => navigate('/movies')}>MOVIES</button>
            <button className={css.button} onClick={() => navigate('/search')}>SEARCH</button>
            <button className={css.button} onClick={() => switchTheme(theme)}>{(theme === 'light') ? 'DARK THEME' : 'LIGHT THEME'}</button>
            <UserInfo/>
        </div>
    );
};

export {
    Header
};