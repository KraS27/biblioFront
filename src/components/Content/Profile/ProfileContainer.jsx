import React from "react";
import {addPost, setProfile, updatePostMessage} from "../../../redux/Reducers/profileReducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Profile from "./Profile";


class ProfileContainer extends React.Component{
    componentDidMount() {
        debugger;
        let userId = this.props.router.params.userId;
        if(!userId)
            userId = 13;

        axios.get(`https://localhost:7079/Profile?userId=${userId}`)
            .then(response => {
                    debugger;
                    this.props.setProfile(response.data.profile);
            }
        )
    }

    render = () => (
        <div>
            <Profile profilePage={this.props}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profileInfo,
        posts: state.profilePage.myPosts.posts,
        postMessage: state.profilePage.myPosts.newPostMessage
    }
}

const mapDispathToProps = {
    setProfile,
    addPost,
    updatePostMessage
}

const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, mapDispathToProps)(withRouter(ProfileContainer));