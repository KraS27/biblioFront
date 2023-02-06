import React from 'react';
import  style from "./Messages.module.css"
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.chats}>
                <div>
                    <NavLink to={"#"} className={chat => chat.isActive ? style.chat : style.chatActive}> Vlad</NavLink>
                </div>
                <div>
                    <NavLink to={"#"} className={chat => chat.isActive ? style.chat : style.chatActive}> Yarik</NavLink>
                </div>
                <div>
                    <NavLink to={"#"} className={chat => chat.isActive ? style.chat : style.chatActive}> Dima</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    HELLO
                </div>
                <div className={style.message}>
                    WHY ARE YOU GAY?
                </div>
                <div className={style.message}>
                    WHO SAID AM GAY?
                </div>
            </div>
        </div>
    );
};

export default Messages;