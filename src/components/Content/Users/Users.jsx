import React from 'react';
import styles from './Users.module.css'

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
                {props.users.map(user =>
                    <div className={styles.usersWrapper} key={user.id}>
                        <img className={styles.avatar} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC7Upmjq-jwWf1b--JqHP7Q3SD31AT6RJwQ&usqp=CAU"} alt="Avatar"/>
                        <div className={styles.userData}>
                            <p>Name: {user.userName}</p>
                            <p>Description: {user.description}</p>
                            {user.followed
                                ? <button className={styles.followButton} onClick={() => { props.unfollow(user.id)}} >Unfollow</button>
                                : <button className={styles.followButton} onClick={() => { props.follow(user.id)}} >Follow</button>
                            }
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.pagination}>
                {pages}
            </div>
        </div>
    )
}

export default Users;