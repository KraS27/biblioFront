import React from "react";
import Post from "./Post/Post";
import style from './MyPosts.module.css'

function MyPosts(props) {

    const refactPosts = props.myPosts.posts.map(post => <Post message={post.text} />)
    const newPost = React.createRef();

    const createPost = () => props.addPost();
    const postTextChange = () => props.updatePostMessage(newPost.current.value);

    return (
    <div className={style.postsWrapper}>
        <div className={style.creatPost}>
            <h2>My Posts</h2>
            <textarea onChange={postTextChange} ref={newPost} value={props.myPosts.postMessage} />
            <button
                onClick={createPost}
                className={style.addButton}>
                Add
            </button>
        </div>
        <div className={style.existPost}> {refactPosts} </div>
    </div>
    )
}

export default MyPosts;