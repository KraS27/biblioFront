import React from 'react';
import style from './Face.module.css';

const Face = (props) => {
    return (
        <div className={style.faceWrapper}>
            <div >
                <img className={style.avatarImage}
                     src={props.profileImg}
                     alt={'Guts'}/>
            </div>
            <div>
                <h2>About Me</h2>
                <p className={style.description}>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default Face;