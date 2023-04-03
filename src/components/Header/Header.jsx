import style from './Header.module.css'
import logo from "../../static/img/logo.png"
import {NavLink} from "react-router-dom";

function Header(){
    return(
        <div className={style.header}>
            <p className={style.logoText}> Unreal <br/> custom network </p>
            {<img className={style.logo} src={logo} alt="gsasgsaga"/>}
            <input className={style.search}  type="text" />
            <NavLink to={"/login"}>
                <p className={style.auth}>Login</p>
            </NavLink>
            <NavLink to={"/register"}>
                <p className={style.auth}>Register</p>
            </NavLink>
        </div>
    )
}

export default Header;