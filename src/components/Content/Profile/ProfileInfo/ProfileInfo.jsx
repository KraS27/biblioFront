import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.profileInfo && style.profileInfoWrapper}>
            <div>
                <div className={style.avatar}>
                    <img className={style.avatarImage}
                         src={props.profileImg}
                         alt={'Profile Img'}/>
                </div>
                <div>
                    <p>{}</p>
                </div>
            </div>
            <div className={style.description}>
                <h2>About Me</h2>
                <p className={style.descriptionText}>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default ProfileInfo;