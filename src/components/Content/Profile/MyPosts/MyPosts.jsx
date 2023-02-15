import Post from "./Post/Post";
import style from './MyPosts.module.css'

function MyPosts(props) {

  const refactPosts = props.myPosts.map(post => <Post message={post.text} />)

  return (
    <div className={style.postsWrapper}>
        <div className={style.creatPost}>
            <h2>My Posts</h2>
            <textarea></textarea>
            <button className={style.addButton}>Add</button>
        </div>
        <div className={style.existPost}>
            {refactPosts}
        </div>
    </div>
  )
}

export default MyPosts;