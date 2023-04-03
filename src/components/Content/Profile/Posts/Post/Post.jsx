import style from "./Post.module.css"

function Post(props) {
  return (
        <div className={style.postWrapper}>
            <div>
                <img className={style.avatar} src={props.profileImg} alt="profileImg"/>
            </div>
            <div>
                <p className={style.postMessage}> {props.message}</p>
            </div>
        </div>
  )
}

export default Post;