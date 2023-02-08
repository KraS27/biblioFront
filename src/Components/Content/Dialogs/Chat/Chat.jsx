import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Chat.module.css"

const Chat = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} className={chat => chat.isActive ? style.chatActive : style.chat}>{props.text}</NavLink>
        </div>
    );
};

export default Chat;