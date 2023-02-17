import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={'/movies'}>All movies</Link>

        </div>
    );
};

export {
    Header
};