import React from 'react';
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";

 const Users = (props) => {

    let pages = [];

    for(let i = 1; i <= props.pageNumberCount; i++) {
        if (i === props.currentPage)
            pages.push(<span onClick={() => { props.onPageChanged(i) }} className={styles.currentPageNumber}>{i}</span>)
        else
            pages.push(<span onClick={() => { props.onPageChanged(i) }} className={styles.pageNumber}>{i}</span>)
    }

    return (
        <div>
            <div className={styles.users}>
                {
                    props.users.map(user =>
                        <div className={styles.usersWrapper} key={user.id}>
                            <NavLink to={"/profile/" + user.id}>
                                <img className={styles.avatar}
                                     src={user.profileImg}
                                     alt="Avatar"
                                />
                            </NavLink>
                            <div className={styles.userData} >
                                <p>Name: {user.userName}</p>
                                <p>Description: {user.description}</p>
                                {user.followed
                                    ? <button className={styles.followButton} onClick={() => { props.unfollow(user.id)}} >Unfollow</button>
                                    : <button className={styles.followButton} onClick={() => { props.follow(user.id)}} >Follow</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.pagination}>
                {pages}
            </div>
        </div>
    )
}

export default Users;