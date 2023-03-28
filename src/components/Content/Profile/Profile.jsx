import React from "react";
import style from './Profile.module.css'
import MyPostsContainer from "./Posts/MyPostsContainer";
import FaceContainer from "./ProfileInfo/ProfileInfoContainer";

function Profile() {
    return (
        <div className={style.profile}>
            <FaceContainer/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;