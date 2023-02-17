import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Face from "./Face/Face";

function Profile(props) {
  return (
    <div className={style.profile}>
        <Face />
        <MyPosts myPosts={props.profile.myPost}
                 addPost={props.addPost}
                 updatePostMessage={props.updatePostMessage}/>
    </div>
  )
}

export default Profile;