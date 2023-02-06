import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div className={style.profile}>
        <img src='https://ventureasheville.com/wp-content/uploads/2014/07/biblio-books-web1.jpg' alt='Biblio'/>
        Ava + description
        <MyPosts/>
    </div>
  )
}

export default Profile;