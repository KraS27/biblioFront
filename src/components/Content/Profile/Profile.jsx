import React from "react";
import style from './Profile.module.css'
import Face from "./Face/Face";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
  return (
    <div className={style.profile}>
        <Face />
        <MyPostsContainer />
    </div>
  )
}

export default Profile;