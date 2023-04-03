import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {

    const newPost = React.createRef();
    const posts = props.posts.map(post => <Post message={post.text} key={post.id} profileImg={props.profile.profileImg}/>)

    return (
        <div className={style.posts}>
            <div>
                <h2>My Posts</h2>
                <textarea onChange={() => {props.updatePostMessage(newPost.current.value)}}
                          ref={newPost}
                          value={props.postMessage}
                />
            </div>
            <button onClick={props.addPost}>Add</button>
            <div className={style.existPost}> {posts} </div>
        </div>
    )
}
export default MyPosts;