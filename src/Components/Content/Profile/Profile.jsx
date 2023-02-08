import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Face from "./Face/Face";

function Profile() {
  return (
    <div className={style.profile}>
        <Face />
        <MyPosts />
    </div>
  )
}

export default Profile;