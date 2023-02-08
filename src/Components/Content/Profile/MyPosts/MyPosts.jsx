import Post from "./Post/Post";
import style from './MyPosts.module.css'

function MyPosts() {
  return (
    <div className={style.postsWrapper}>
        <div className={style.creatPost}>
            <h2>My Posts</h2>
            <textarea></textarea>
            <button className={style.addButton}>Add</button>
        </div>
        <div className={style.existPost}>
            <Post message='Hello' />
            <Post message='World' />
            <Post message='KoKo Jambo' />
        </div>
    </div>
  )
}

export default MyPosts;