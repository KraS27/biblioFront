import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div className={style.profile}>
        <img src='https://www.theartnewspaper.ru/media/original_images/ed0d16aa-ca52-4c3a-a588-5a6492f0d668.jpg' alt='Biblio'></img>
        <MyPosts/>
    </div>
  )
}

export default Profile;