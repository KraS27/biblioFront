import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../../redux/Reducers/profileReducer";
import MyPosts from "./MyPosts";


function MyPostsContainer(props) {

    debugger;

    const state = props.store.getState();

    const refactPosts = state.profile.myPosts.posts.map(post => <Post message={post.text} />)

    const createPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const postTextChange = (newText) => props.store.dispatch(updatePostMessageActionCreator(newText));

    return (<MyPosts
        posts={refactPosts}
        createPost={createPost}
        postTextChange={postTextChange}
        postMessage={state.profile.myPosts.newPostMessage}
    />)
}
export default MyPostsContainer;