import React from 'react';
import styles from './Users.module.css'
import axios  from "axios";


class Users extends React.Component{

    componentDidMount() {
        axios.get(`https://localhost:7079/User/GetUsers?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsersCount(response.data.usersCount);
            this.props.setUsers(response.data.users);
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://localhost:7079/User/GetUsers?page=${page}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
        })
    }

    render = () => {
        const pageNumberCount = Math.ceil(this.props.usersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pageNumberCount; i++){
            if(i === this.props.currentPage)
                pages.push(<span onClick={ () => {this.onPageChanged(i)} } className={styles.currentPageNumber}>{i}</span>)
            else
                pages.push(<span onClick={ () => {this.onPageChanged(i)} } className={styles.pageNumber}>{i}</span>)
        }

        return(
            <div>
                <div className={styles.users}>
                    {this.props.users.map(user =>
                        <div className={styles.usersWrapper} key={user.id}>
                            <img className={styles.avatar} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC7Upmjq-jwWf1b--JqHP7Q3SD31AT6RJwQ&usqp=CAU"} alt="Avatar"/>
                            <div className={styles.userData}>
                                <p>Name: {user.userName}</p>
                                <p>Description: {user.description}</p>
                                {user.followed
                                    ? <button className={styles.followButton} onClick={() => { this.props.unfollow(user.id)}} >Unfollow</button>
                                    : <button className={styles.followButton} onClick={() => { this.props.follow(user.id)}} >Follow</button>
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
}

/*const Users = (props) => {

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
};*/

export default Users;