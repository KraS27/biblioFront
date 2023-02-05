import style from './../Modules/Navigation.module.css'

function Navigation() {
  return (
    <nav className={style.nav}>
      <div>
        Profile
      </div>
      <div>
        Messages
      </div>
      <div>
        Music
      </div>
      <div>
        Settings
      </div>
    </nav>
  )
}

export default Navigation;