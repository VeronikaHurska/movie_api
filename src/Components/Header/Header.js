import React from 'react';
import {Link, useFormAction} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {useForm} from "react-hook-form";

const Header = () => {

    return (
        <div className={css.Header}>
            <i className="fa-light fa-film"></i>
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/search'}>Search</Link>
            <UserInfo/>
        </div>
    );
};

export {
    Header
};