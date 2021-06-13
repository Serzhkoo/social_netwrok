import React from "react";
import {Profile} from "./Profile";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsPath = {
    userId: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsPath> & PropsType

type MapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
}

type PropsType = MapStateToPropsType & {
    getUserProfile: (userId: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '17254'
        }
        this.props.getUserProfile(userId);
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )

    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);