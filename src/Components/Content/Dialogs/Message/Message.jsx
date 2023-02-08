import React from 'react';
import style from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={style.message}>
            <h1>{props.text}</h1>
        </div>
    );
};

export default Message;