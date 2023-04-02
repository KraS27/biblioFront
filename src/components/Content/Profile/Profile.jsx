import React from "react";
import style from './Profile.module.css'
import MyPostsContainer from "./Posts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

function Profile() {
    return (
        <div className={style.profileWrapper}>
            <ProfileInfoContainer/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;