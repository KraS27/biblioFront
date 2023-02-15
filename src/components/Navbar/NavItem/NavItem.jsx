import React from 'react';
import style from "./NavItem.module.css";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <div className={style.link}>
            <NavLink to={props.url} className={link => link.isActive ? style.active : style.link}>{props.text}</NavLink>
        </div>
    );
};

export default NavItem;