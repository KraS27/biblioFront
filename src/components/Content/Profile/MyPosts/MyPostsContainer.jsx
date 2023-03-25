import React from "react";
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../../redux/Reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.myPosts.posts,
        postMessage: state.profilePage.myPosts.newPostMessage
    }
}
const mapDispatchToProps =  {
    createPost: addPostActionCreator,
    postTextChange: updatePostMessageActionCreator
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;