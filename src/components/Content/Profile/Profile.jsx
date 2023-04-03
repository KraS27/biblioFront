import React from "react";
import style from './Profile.module.css'
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../../Common/Preloader";


const Profile = (props) => {


    if(!props.profilePage.profile){
        return <Preloader />
    }
    else {
        return (
            <div>
                <ProfileInfo profile={props.profilePage.profile} />
                <MyPosts posts={props.profilePage.posts}
                         postMessage={props.profilePage.postMessage}
                         addPost={props.profilePage.addPost}
                         updatePostMessage={props.profilePage.updatePostMessage}
                         profile={props.profilePage.profile}
                />
            </div>
        )
    }

}

export default Profile;