import style from './Header.module.css'
import logo from "../../static/img/logo.png"

function Header(){
    return(
        <div className={style.header}>
            <p className={style.logoText}> Unreal <br/> custom network </p>
            {<img className={style.logo} src={logo} alt="gsasgsaga"/>}
            <input className={style.search}  type="text" />
        </div>
    )
}

export default Header;