import React from "react";
import style from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import FaceContainer from "./Face/FaceContainer";

function Profile() {
    return (
        <div className={style.profile}>
            <FaceContainer/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;