import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import axios from "axios";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {setProfile} from "../../../../redux/Reducers/profileReducer";
import Preloader from "../../../Common/Preloader";
class ProfileInfoContainer extends React.Component{

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
    render = () => {
        if(!this.props.profile)
            return <Preloader/>
        else
            return <ProfileInfo
                profile={this.props.profile}
            />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profileInfo
    }
}
const mapDispathToProps = {
    setProfile
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

export default connect(mapStateToProps, mapDispathToProps)(withRouter(ProfileInfoContainer));