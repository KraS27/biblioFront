import style from './Navigation.module.css'

function Navigation() {
  return (
    <nav className={style.nav}>
      <div>
        <a href="src/Components#" className={style.item}>Profile</a>
      </div>
      <div>
       <a href="src/Components#" className={style.item}>Messages</a>
      </div>
      <div>
        <a href="src/Components#" className={style.item}>News</a>
      </div>
      <div>
        <a href="src/Components#" className={style.item}>Settings</a>
      </div>
    </nav>
  )
}

export default Navigation;