import React from "react";
import style from './Navigation.module.css'
import NavItem from "./NavItem/NavItem";

function Navigation() {
  return (
      <nav className={style.nav}>
          <p className={style.menu}>MENU</p>
          <NavItem url={"/profile"} text={"Profile"}/>
          <NavItem url={"/dialogs"} text={"Dialogs"} />
          <NavItem url={"/users"} text={"Users"}/>
          <NavItem url={"/news"} text={"News"} />
          <NavItem url={"/settings"} text={"Settings"} />
      </nav>
  )
}

export default Navigation;