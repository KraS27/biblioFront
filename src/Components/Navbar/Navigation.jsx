import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import NavItem from "./NavItem/NavItem";

function Navigation() {
  return (
      <nav className={style.nav}>
          <NavItem url={"/profile"} text={"Profile"}/>
          <NavItem url={"/messages"} text={"Messages"} />
          <NavItem url={"/news"} text={"News"} />
          <NavItem url={"/settings"} text={"Settings"} />
      </nav>
  )
}

export default Navigation;