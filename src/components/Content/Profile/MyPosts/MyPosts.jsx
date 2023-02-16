import React from "react";
import Post from "./Post/Post";
import style from './MyPosts.module.css'

function MyPosts(props) {

    const refactPosts = props.myPosts.map(post => <Post message={post.text} />)
    const newPost = React.createRef();

    const createPost = () =>{
        debugger;
        props.addPost(newPost.current.value);
    }

    return (
    <div className={style.postsWrapper}>
        <div className={style.creatPost}>
            <h2>My Posts</h2>
            <textarea ref={newPost}></textarea>
            <button
                onClick={createPost}
                className={style.addButton}>
                Add
            </button>
        </div>
        <div className={style.existPost}>
            {refactPosts}
        </div>
    </div>
    )
}

export default MyPosts;