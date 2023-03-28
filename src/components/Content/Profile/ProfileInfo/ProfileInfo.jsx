import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.faceWrapper}>
            <div >
                <img className={style.avatarImage}
                     src={props.profileImg}
                     alt={'Profile Img'}/>
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

export default ProfileInfo;