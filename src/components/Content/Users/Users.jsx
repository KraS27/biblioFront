import React from 'react';
import  style from './Users.module.css'

const Users = (props) => {

    const users = props.users.map(user =>
        <div className={style.usersWrapper}>
            <img className={style.avatar} src={user.img} alt="Avatar"/>
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