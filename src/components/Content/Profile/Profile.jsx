import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Face from "./Face/Face";

function Profile(props) {
  return (
    <div className={style.profile}>
        <Face />
        <MyPosts myPosts={props.profile.myPost} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;