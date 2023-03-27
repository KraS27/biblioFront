import React from "react";
import {addPost, updatePostMessage} from "../../../../redux/Reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.myPosts.posts,
        postMessage: state.profilePage.myPosts.newPostMessage
    }
}
const mapDispatchToProps =  {
    addPost,
    updatePostMessage
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;