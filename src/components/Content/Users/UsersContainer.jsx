import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";


/*const mapStateToProps= (state) => {
    return{
        users: state.users.users
    }
}

const mapDispatchToProps = () => {

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(<Users/>);*/

const UsersContainer = () => {
    return(<Users />)
}

export default UsersContainer;