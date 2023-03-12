import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../../redux/Reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*function MyPostsContainer(props) {

    const state = props.store.getState().profile;
    const refactPosts = state.myPosts.posts.map(post => <Post message={post.text} />)

    const createPost = () => { props.store.dispatch(addPostActionCreator()); }
    const postTextChange = (newText) => props.store.dispatch(updatePostMessageActionCreator(newText));

    return (<MyPosts
        posts={refactPosts}
        createPost={createPost}
        postTextChange={postTextChange}
        postMessage={state.myPosts.newPostMessage}
    />)
}*/

const mapStateToProps = (state) => {
    debugger;
    return {
        posts: state.profilePage.myPosts.posts.map(post => <Post message={post.text} />),
        postMessage: state.profilePage.myPosts.newPostMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => { dispatch(addPostActionCreator()) },
        postTextChange: (newText) => { dispatch(updatePostMessageActionCreator(newText)) }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;