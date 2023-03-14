import React from 'react';
import  style from './Users.module.css'
import axios  from "axios";

const Users = (props) => {

    if(props.users.length === 0){
        axios.get("https://localhost:7079/User/GetUsers").then(response => {
            debugger;
            const data = response.data;
            props.setUsers(data);
        })
    }

    const users = props.users.map(user =>
        <div className={style.usersWrapper} key={user.id}>
            <img className={style.avatar} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC7Upmjq-jwWf1b--JqHP7Q3SD31AT6RJwQ&usqp=CAU"} alt="Avatar"/>
            <div className={style.userData}>
                <p>Name: {user.userName}</p>
                <p>Description: {user.description}</p>
                {user.followed
                    ? <button className={style.followButton} onClick={() => { props.unfollow(user.id)}} >Unfollow</button>
                    : <button className={style.followButton} onClick={() => { props.follow(user.id)}} >Follow</button>
                }
            </div>
        </div>
    )

    return (
        <div>
            {users}
        </div>
    );
};

export default Users;