import React from 'react';
import {Link} from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div style={{padding: 200 , fontSize:30,width:500,margin:"auto",color:'orange'}}>

            <div style={{fontSize:50,margin:10,fontWeight:"bold"}}>That page doesn`t exist.</div>
            Please check your url or head to our <Link to={'/movies'}>homepage</Link>
        </div>
    );
};

export {
    NotFoundPage
};