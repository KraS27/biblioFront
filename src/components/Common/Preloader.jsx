import React from 'react';
import preloader from '../../static/img/preloader.svg';

const Preloader = (props) => {
    return (
        <div>
             <img src={preloader} alt="load"/>
        </div>
    );
};

export default Preloader;