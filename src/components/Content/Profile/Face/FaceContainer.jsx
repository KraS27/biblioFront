import React from 'react';
import Face from "./Face";
import {connect} from "react-redux";
import axios from "axios";
import {setProfileDescription, setProfileImg} from "../../../../redux/Reducers/profileReducer";
class FaceContainer extends React.Component{

    componentDidMount() {
        axios.get('https://localhost:7079/Profile/GetProfile?userId=25')
            .then(response => {
                debugger;
                this.props.setProfileImg(response.data.profile.profileImg);
                this.props.setProfileDescription(response.data.profile.description);
            }
        )
    }

    render = () => {
        debugger;
        return(
            <Face
                profileImg={this.props.profileImg}
                description={this.props.description}
            />
        )
    }
};

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

export default connect(mapStateToProps, mapDispathToProps)(FaceContainer);