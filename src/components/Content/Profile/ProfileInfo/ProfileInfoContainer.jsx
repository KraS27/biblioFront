import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import axios from "axios";
import {setProfileDescription, setProfileImg} from "../../../../redux/Reducers/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
class ProfileInfoContainer extends React.Component{

    componentDidMount() {
        debugger;
        let userId = this.props.router.params.userId;
        if(!userId)
            userId = 13;

        axios.get(`https://localhost:7079/Profile?userId=${userId}`)
            .then(response => {
                debugger;
                this.props.setProfileImg(response.data.profile.profileImg);
                this.props.setProfileDescription(response.data.profile.description);
            }
        )
    }
    render = () => {
        return(
            <ProfileInfo
                profileImg={this.props.profileImg}
                description={this.props.description}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileImg: state.profilePage.face.profileImg,
        description: state.profilePage.face.description
    }
}
const mapDispathToProps = {
    setProfileImg,
    setProfileDescription
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