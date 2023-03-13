import React from "react";
import style from './MyPosts.module.css'

function MyPosts(props) {

    const newPost = React.createRef();

    return (
    <div className={style.postsWrapper}>
        <div>
            <h2>My Posts</h2>
            <textarea onChange={() => {props.postTextChange(newPost.current.value)}}
                      ref={newPost}
                      value={props.postMessage}
            />
        </div>
        <button onClick={props.createPost}>Add</button>
        <div className={style.existPost}> {props.posts} </div>
    </div>
    )
}
export default MyPosts;