import React from "react";
import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../../redux/Reducers/profileReducer";


function MyPosts(props) {

    const refactPosts = props.myPosts.posts.map(post => <Post message={post.text} />)
    const newPost = React.createRef();

    const createPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const postTextChange = () => props.dispatch(updatePostMessageActionCreator(newPost.current.value) );

    return (
    <div className={style.postsWrapper}>
        <div>
            <h2>My Posts</h2>
            <textarea onChange={postTextChange}
                      ref={newPost}
                      value={props.myPosts.postMessage}
            />
        </div>
        <button onClick={createPost}>Add</button>
        <div className={style.existPost}> {refactPosts} </div>
    </div>
    )
}
export default MyPosts;